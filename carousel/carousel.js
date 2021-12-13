// selecting all elemets
let carousel = document.querySelector('.carousel');
let slideshow = document.querySelector('.slideshow');
let slides = document.querySelectorAll('.slide');
let previousButton = document.querySelector('.button-prev');
let nextButton = document.querySelector('.button-next');

// making nav and adding it to the Dom
let navigation = document.querySelector('.navigation');
let n = 1;
let navs = '';
for (let slide of slides) {
  navs = navs + `<span id=${n} class="nav">${n}</span>`;
  n = n + 1;
}
navigation.innerHTML = navs;

// adding navigation functionality to the navs on click
let navItems = document.querySelectorAll('.nav');
let index = 1;
for (let nav of navItems) {
  console.log(nav);
  nav.addEventListener('click', function () {
    index = parseInt(nav.id);
    slideshow.style.transition = '1s';

    slideshow.style.transform = `translateX(${slideWidth * -index}px)`;
  });
}

// making clones and appending them to both ends
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.class = 'slide';
lastClone.class = 'slide';

// append firstclone to end and last clone to start
slideshow.append(firstClone);
slideshow.prepend(lastClone);

// selecttion slides again so that we have 2 extra nodes as well
slides = document.querySelectorAll('.slide');

const slideWidth = carousel.clientWidth;
slideshow.style.transform = `translateX(${slideWidth * -index}px)`;

// making buttons work
previousButton.addEventListener('click', function () {
  if (index === 0) {
    return;
  }
  console.log(index);
  index -= 1;
  console.log(index);

  slideshow.style.transition = '1s';
  console.log(`translateX(${slideWidth * -index}px)`);
  slideshow.style.transform = `translateX(${slideWidth * -index}px)`;
});

nextButton.addEventListener('click', function () {
  if (index === slides.length - 1) {
    return;
  }
  console.log(index);
  index += 1;
  console.log(index);

  slideshow.style.transition = '1s';
  console.log(`translateX(${slideWidth * -index}px)`);
  slideshow.style.transform = `translateX(${slideWidth * -index}px)`;
});

// handling the last slides transition
slideshow.addEventListener('transitionend', function () {
  if (index === 0) {
    slideshow.style.transition = 'none';
    index = slides.length - 2;
    slideshow.style.transform = `translateX(${slideWidth * -index}px)`;
  } else if (index === slides.length - 1) {
    slideshow.style.transition = 'none';
    index = 1;
    slideshow.style.transform = `translateX(${slideWidth * -index}px)`;
  }
});

// adding navigation on key events
window.addEventListener('keyup', function (e) {
  if (e.code === 'ArrowRight') {
    if (index === slides.length - 1) {
      return;
    }
    console.log(index);
    index += 1;
    console.log(index);

    slideshow.style.transition = '1s';
    console.log(`translateX(${slideWidth * -index}px)`);
    slideshow.style.transform = `translateX(${slideWidth * -index}px)`;
  }

  if (e.code === 'ArrowLeft') {
    if (index === 0) {
      return;
    }
    console.log(index);
    index -= 1;
    console.log(index);

    slideshow.style.transition = '1s';
    console.log(`translateX(${slideWidth * -index}px)`);
    slideshow.style.transform = `translateX(${slideWidth * -index}px)`;
  }
});
