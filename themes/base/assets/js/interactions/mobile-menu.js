'use strict';

import {addClass, hasClass, removeClass} from '../helpers/helpers';

export default function initMobileMenu() {

	let menuIcon = document.querySelector('#mobile__nav-icon');

	if (menuIcon) {
		menuIcon.addEventListener('click', toggleMenu, false);
	}

	let subnavIcon = document.querySelector('#subnav__nav-icon');
	if (subnavIcon) {
		subnavIcon.addEventListener('click', toggleMenu, false);
	}
}

function toggleMenu() {
	let menu = document.querySelector('.menu--mobile');
	let subnav = document.querySelector('.subnav__mobile');
	let menuIcon = document.querySelector('#mobile__nav-icon');
	let subnavIcon = document.querySelector('#subnav__nav-icon');

	if (!hasClass(menu, 'menu--mobile--open')) {
		addClass(menu, 'menu--mobile--open');
		addClass(subnav, 'subnav__mobile--open');
		addClass(subnavIcon, 'nav__icon--open');
		addClass(menuIcon, 'nav__icon--hidden');
	} else {
		removeClass(menu, 'menu--mobile--open');
		removeClass(subnav, 'subnav__mobile--open');
		removeClass(subnavIcon, 'nav__icon--open');
		removeClass(menuIcon, 'nav__icon--hidden');
	}
}
