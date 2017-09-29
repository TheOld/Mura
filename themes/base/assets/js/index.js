'use strict';

import {animateBoxes, destroyAnimBoxes} from './animations/boxes.js';
import {delegateOnFocus, delegateScrollTo} from './interactions/events.js';

// import Animate from './animations/animate.js';
import Barba from 'barba.js';
import DaVinci from './animations/davinci';
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollListener from './interactions/ScrollListener.js';
import Slider from './components/Slider/Slider.js';
import Waypoints from './animations/waypoints.js';
import {addClass} from './utils/cssClassHelpers.js';
import debounce from './utils/debouncer.js';
import imagesLoaded from 'imagesloaded';
import initMobileMenu from './interactions/mobile-menu';
import initTransitionController from './transition.js';

window.jQuery = require('jquery');
window.waypoints = new Waypoints(document.querySelector('#main-scrollbar'));

// let _animate;
// let lastScrollTop = 0;
let scrollListener;
let daVinci;
let sectionMethod;
// let methodOne;
// let methodTwo;
// let methodThree;
// let methodFour;

document.addEventListener('DOMContentLoaded', function() {
	initTransitionController();
});

Barba.Dispatcher.on('transitionCompleted', () => {
	initialize();
});

function initialize() {
	initMobileMenu();

	window.horseLoaded = false;
	window.pinLoaded = false;
	window.buildingLoaded = false;
	window.fileLoaded = false;

	let cardEl = document.querySelector('.js-slider');
	if (cardEl) {
		ReactDOM.render(
			<Slider />,
			cardEl
		);
	}

	window.waypoints = new Waypoints(document.querySelector('#main-scrollbar'));

	attachScrollTos();
	scrollListener = new ScrollListener();

	const imgLoaded = imagesLoaded(document.querySelector('.js-body'), { background: true });
	imgLoaded.on('always', triggerImgsLoaded);

	let inputs = document.querySelectorAll('.control');

	for (var index = 0; index < inputs.length; index++) {
		var input = inputs[index];
		delegateOnFocus(input);
	}

	let main = document.querySelector('main');
	let page = main.dataset.page || main.getAttribute('[data-page]');

	if (page !== 'atuacao') {
		let debouncedScroll = debounce(onScroll, 120);
		window.waypoints.addListener(debouncedScroll);
		window.isNavbarOpen = false;
	}

	const hash = window.location.hash;

	if (hash) {
		const section = document.querySelector(hash);
		window.waypoints.scrollIntoView(section);
	}

	setTimeout(function() {
		let navItems = document.querySelectorAll('.nav__item');

		for (let index = 0; index < navItems.length; index++) {
			let addLoadedClassFn = addLoadedClass(index, navItems);
			setTimeout(addLoadedClassFn, index * 65);
		};
	}, 480);

	daVinci = new DaVinci();
	daVinci.init();

	sectionMethod = document.querySelector('.js--methodtitle');
	// methodOne = document.querySelector('.method__title');
	// methodTwo = document.querySelector('.js--file');
	// methodThree = document.querySelector('.js--horse');
	// methodFour = document.querySelector('.js--building');
}

function attachScrollTos() {
	const arrow = document.querySelector('.scroll__down');
	const sectionOne = document.querySelector('.section--about');

	if (arrow) {
		delegateScrollTo(arrow, sectionOne);
	}
	let menuItems = document.querySelectorAll('.js-nav');

	for (var index = 0; index < menuItems.length; index++) {
		var menuItem = menuItems[index];
		const target = document.querySelector('.' + (menuItem.dataset.target || menuItem.getAttribute('[data-target]')));
		delegateScrollTo(menuItem, target);
	}
}

function triggerImgsLoaded() {
	const images = Array.prototype.slice.call(document.querySelectorAll('img'));

	for (var index = 0; index < images.length; index++) {
		const img = images[index];
		addClass(img, 'img--loaded');
	}
}

function onScroll(callback) {
	window.requestAnimationFrame(() => {
		let scrollTop = window.waypoints.getScrollTop();

		// 2350 sm
		// 2510 md
		// 2200

		if (scrollTop > 2200 && scrollTop < 3200) {
			if (window.waypoints.isVisible(sectionMethod)) {
				animateBoxes();
				setTimeout(function() {
					destroyAnimBoxes();
				}, 2000);
			} else {
				destroyAnimBoxes();
			}
		} else {
			destroyAnimBoxes();
		}

		// if (scrollTop > 3000 && window.waypoints.isVisible(methodOne) && !window.pinLoaded) {
			// Animate.drawPin();
			// setTimeout(Animate.animateIn(document.querySelector('.js--method1')), 120);
		// }

		// if (scrollTop > 3250 && window.waypoints.isVisible(methodTwo) && !window.fileLoaded) {
		// 	Animate.drawFile();
		// 	setTimeout(Animate.animateIn(document.querySelector('.js--method2')), 120);
		// }

		// if (scrollTop > 4000 && window.waypoints.isVisible(methodThree) && !window.horseLoaded) {
		// 	Animate.drawHorse();
		// 	setTimeout(Animate.animateIn(document.querySelector('.js--method3')), 120);
		// }

		// if (scrollTop > 4600 && window.waypoints.isVisible(methodFour) && !window.buildingLoaded) {
		// 	Animate.drawBuilding();
		// 	setTimeout(Animate.animateIn(document.querySelector('.js--method4')), 120);
		// }

		// if (scrollTop > 400 && scrollTop < 1780) {
		// 	const about = document.querySelector('#about');
		// 	let logo = document.querySelector('#about-logo');
		// 	moveImage(logo, about, scrollTop);
		// }

		scrollListener.watchMenu();
	});
}

function addLoadedClass(index, items) {
	var item = items[index];
	return function() {
		addClass(item, 'nav__item--loaded');
	};
}
