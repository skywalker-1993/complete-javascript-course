'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////
// LECTURES
// Selecting elements
/* 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// allButtons is an HTML collection, which is updated
// every time the user deletes an element
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements«
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // Before we would do the same like this:
    // message.parentElement.removeChild(message);
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // Only accessible if we define it ourselves
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber); // special attributes

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes, unlike arrays

// Don't use
logo.className = 'tiago'; // OVERWRITES CLASS NAMES
 */

/* const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//   document.body.addEventListener('click', function () {
//   window.scrollTo(0, 0);
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log('to test position:', window.pageXOffset, window.pageYOffset);
// });
 

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };
 */

// rgb(255,255,255)
// The section below is a lot more complicated than it needed to be because I was playing around with timers and DOM elements in order to figure out how this works.

// Explanation found:
// When you access the event properties during the execution of your callback, you can expect them to be accurate.

// When you access the event properties after the handlers were triggered, then if you're using

//     plain DOM events: the currentTarget will be null
//     jQuery events: the currentTarget will stay the same
//     jQuery delegated events (including jQueryMobile ones): the currentTarget will be the actual bound target

const waitSeconds = function (functionName, ev, t = 0.5) {
  const myTimer = setInterval(function () {
    clearInterval(myTimer);
    // console.log(ev);
    // console.log('Exited timer');
    if (functionName) {
      functionName(ev);
    }
  }, t * 1000);
};

// let target1, target2;

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  function setColor(ev) {
    e.target.style.backgroundColor = randomColor();
    console.log('LINK', ev.target);
    // console.log(ev.currentTarget);
    // target1 = el.target;
  }
  // target2 = e.target;
  // console.log(e);
  // console.log('CURRENT:', e.currentTarget);
  console.log(e.currentTarget);
  console.log(e.currentTarget === this);
  waitSeconds(setColor, e, 0);
  // Stop event propagation
  // e.stopPropagation(); // Not a good idea in practice
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e);
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    // console.log(e);
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
  },
  false
);

// document.body.addEventListener('click', function (e) {
//   // console.log(e);
//   console.log(e.currentTarget);
// });
