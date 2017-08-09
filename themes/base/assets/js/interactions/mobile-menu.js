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
	let menuItems = document.querySelectorAll('.menu__item');
	console.log(menuItems);

	if (!hasClass(menu, 'menu--mobile--open')) {
		addClass(menu, 'menu--mobile--open');
		addClass(subnav, 'subnav__mobile--open');
		addClass(subnavIcon, 'nav__icon--open');
		addClass(menuIcon, 'nav__icon--hidden');

		for (let i = 0; i < menuItems.length; i++) {
			let toggleItemMove = getToggleItemMove(i, menuItems);
			setTimeout(toggleItemMove, (i * 60) + 180);
		};
	} else {
		removeClass(menu, 'menu--mobile--open');
		removeClass(subnav, 'subnav__mobile--open');
		removeClass(subnavIcon, 'nav__icon--open');
		removeClass(menuIcon, 'nav__icon--hidden');

		menuItems.forEach(function(link, index) {
			removeClass(link, 'menu__item--open');
		}, this);
	}
}

function getToggleItemMove(i, list) {
	let item = list[i];
	return function() {
		addClass(item, 'menu__item--open');
	};
}
