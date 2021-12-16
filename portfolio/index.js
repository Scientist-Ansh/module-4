const horizontalSections = gsap.utils.toArray('section.horizontal');

horizontalSections.forEach(function (sec, i) {
  let thisPinWrap = sec.querySelector('.pin-wrap');
  let thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

  let getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

  gsap.fromTo(
    thisAnimWrap,
    {
      x: () => (thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()),
    },
    {
      x: () => (thisAnimWrap.classList.contains('to-right') ? getToValue() : 0),
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        start: 'top top',
        end: () => '+=' + (thisAnimWrap.scrollWidth - window.innerWidth),
        pin: thisPinWrap,
        invalidateOnRefresh: true,
        //anticipatePin: 1,
        scrub: true,
        //markers: true,
      },
    }
  );
});

let introText = document.querySelector('.intro-right');
let introPic = document.querySelector('.intro-left');

gsap.from(introText, {
  opacity: 0,
  x: -200,
  y: -200,
  duration: 2,
});
gsap.from(introPic, {
  opacity: 0,
  x: 200,
  y: 200,
  duration: 2,
});

document.querySelector('.frame').addEventListener('click', function () {
  document.querySelector('.top').classList.add('open');
  document.querySelector('.message').classList.add('pull');
});
