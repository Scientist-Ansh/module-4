// selecting all elemets
let carousel = document.querySelector('.carousel');
let slideshow = document.querySelector('.slideshow');
let slides = document.querySelectorAll('.slide');
let previousButton = document.querySelector('.button-prev');
let nextButton = document.querySelector('.button-next');
console.log(slides.length);

let index = 1;

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

console.log(slides.length);

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
