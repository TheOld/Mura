'use strict';

import {animateBoxes, destroyAnimBoxes} from './animations/boxes.js';
import {delegateOnFocus, delegateScrollTo} from './interactions/events.js';

// import Animate from './animations/animate.js';
import Barba from 'barba.js';
import Picasso from './animations/Picasso';
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollController from './animations/scrollmagic';
import ScrollListener from './interactions/ScrollListener.js';
import Slider from './components/Slider/Slider.js';
import SlidingContent from './interactions/SlidingContent';
import Waypoints from './animations/waypoints';
import debounce from './utils/debouncer.js';
import imagesLoaded from 'imagesloaded';
import initMobileMenu from './interactions/mobile-menu';
import initTransitionController from './transition';
import {addClassFunc, addClass, inViewport, spamLetters} from '../js/helpers/helpers';
import Rellax from 'rellax';

// let _animate;
// let lastScrollTop = 0;
let scrollListener;
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
	window.methodTitle = false;
	window.introTitle = false;

	spamLetters('.js--introtitle');

	let cardEl = document.querySelector('.js-slider');
	if (cardEl) {
		ReactDOM.render(
			<Slider />,
			cardEl
		);
	}

	let scrollController = new ScrollController();
	scrollController.init();
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
		window.addEventListener('scroll', debouncedScroll);
		window.isNavbarOpen = false;

		let picasso = new Picasso();
		picasso.init();
	}

	const hash = window.location.hash;

	if (hash) {
		// const section = document.querySelector(hash);
		// window.waypoints.scrollIntoView(section);
	}

	SlidingContent.attachListeners();

	if (page === 'atuacao') {
		SlidingContent.setInitialContent();
	}

	const sections = document.querySelectorAll('.section');
	for (var i = 0; i < sections.length; i++) {
		const section = sections[i];

		if (inViewport(section)) {
			Waypoints.showContent(section);
			break;
		}
	}

	setTimeout(function() {
		let navItems = document.querySelectorAll('.nav__item');

		for (let index = 0; index < navItems.length; index++) {
			let addLoadedClassFn = addClassFunc(index, navItems, 'nav__item--loaded');
			setTimeout(addLoadedClassFn, index * 65);
		};
	}, 480);

	sectionMethod = document.querySelector('.js--methodtitle');

	var rellax = new Rellax('.rellax');
	console.log(rellax);
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
		let scrollTop = window.scrollY || window.pageYOffset;
		if (scrollTop > 2200 && scrollTop < 3200) {
			if (inViewport(sectionMethod)) {
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

		scrollListener.watchMenu();
		scrollListener.watchSections();
	});
}
