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

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');