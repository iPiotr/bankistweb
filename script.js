"use strict";

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

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

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


const btnScrollTo = document.querySelector('.btn--scroll-to');

const secton1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = secton1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  secton1.scrollIntoView({behavior: 'smooth'});


});

const h1 = document.querySelector('h1');

const alertH1 = function(e) {
  alert('AddListe');
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
