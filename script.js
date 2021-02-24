"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const secton1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

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

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');

const message = document.createElement('div'); 
message.classList.add('cookie-message');

message.innerHTML = 
'We use cookies for improwed functionality and analytics.<button class="btn btn--close-cookie">Go it!</button>';

header.append(message);

document.querySelector('.btn--close-cookie')
.addEventListener('click', () => { message.remove() });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px'

document.documentElement.style.setProperty('--color-primary', 'blue');

const logo = document.querySelector('.nav__logo');

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = secton1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  secton1.scrollIntoView({behavior: 'smooth'});

});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  //guard clause
  if(!clicked) return;

  //active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  //actice content area

  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');

});

//Menu fade animation

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation
// const initialCoords = secton1.getBoundingClientRect();


// window.addEventListener('scroll', function(e) {

//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')

// });

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const obsOptions = {
//   root:null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(secton1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver
(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

const revealSection = function(entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;
  else entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(
  revealSection, {
    root: null,
    threshold: 0.15,
  });

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //going upwards

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// })

// const alertH1 = function(e) {
//   alert('AddListe');
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);



// const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINKN', e.target);
// });