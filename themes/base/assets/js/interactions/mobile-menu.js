'use strict';

import {addClass, removeClass} from '../helpers/helpers';

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
	if (window.isNavbarOpen && window.isMenuOpen) {
		hideMenu();
	} else {
		if (!window.isNavbarOpen) {
			let fixedMenu = document.querySelector('.fixedmenu');
			window.requestAnimationFrame(() => {
				addClass(fixedMenu, 'fixedmenu--open');
			});
		}
		showMenu();
	}
}

export function setActiveMenuItem(target) {
	let item = document.querySelector('[data-target="' + target + '"]');
	const menuItems = document.querySelectorAll('.js-nav');
	window.requestAnimationFrame(() => {
		for (var index = 0; index < menuItems.length; index++) {
			var menuItem = menuItems[index];
			removeClass(menuItem, 'menu__item--active');
		}

		addClass(item, 'menu__item--active');
		hideMenu();
	});
}

function addItemClass(i, list) {
	let item = list[i];
	return function() {
		addClass(item, 'menu__item--open');
	};
}

function removeItemClass(i, list) {
	let item = list[i];
	return function() {
		removeClass(item, 'menu__item--open');
	};
}

function showMenu() {
	let menu = document.querySelector('.menu--mobile');
	let menuIcon = document.querySelector('#mobile__nav-icon');
	let subnavIcon = document.querySelector('#subnav__nav-icon');
	let menuItems = document.querySelectorAll('.menu__item');
	let menuAux = document.querySelector('.menu__aux--dt');

	window.requestAnimationFrame(() => {
		addClass(menu, 'menu--mobile--open');
		addClass(menuAux, 'menu__aux--dt--active');
		addClass(subnavIcon, 'nav__icon--open');
		addClass(menuIcon, 'nav__icon--hidden');
	});

	for (let i = 0; i < menuItems.length; i++) {
		let toggleItemMove = addItemClass(i, menuItems);
		setTimeout(toggleItemMove, (i * 60) + 180);
	};
	let body = document.body;
	body.style.overflow = 'hidden';

	window.isNavbarOpen = true;
	window.isMenuOpen = true;
}

function hideMenu() {
	let fixedMenu = document.querySelector('.fixedmenu');
	let menu = document.querySelector('.menu--mobile');
	let menuIcon = document.querySelector('#mobile__nav-icon');
	let subnavIcon = document.querySelector('#subnav__nav-icon');
	let menuItems = document.querySelectorAll('.menu__item');
	let menuAux = document.querySelector('.menu__aux--dt');
	for (let i = 0; i < menuItems.length; i++) {
		let toggleItemMove = removeItemClass(i, menuItems);
		setTimeout(toggleItemMove, (i * 60) + 180);
	};

	window.requestAnimationFrame(() => {
		removeClass(menuIcon, 'nav__icon--hidden');
		removeClass(subnavIcon, 'nav__icon--open');
		removeClass(menu, 'menu--mobile--open');
		removeClass(menuAux, 'menu__aux--dt--active');
	});

	let main = document.querySelector('main');
	let page = main.dataset.page || main.getAttribute('[data-page]');
	if (page !== 'atuacao') {
		removeClass(fixedMenu, 'fixedmenu--open');
		window.isNavbarOpen = false;
	}

	let body = document.body;
	body.removeAttribute('style');

	window.isMenuOpen = false;
}
