'use strict';

import Animate from './animations/animate.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider/Slider.js';
import Waypoints from './animations/waypoints.js';
import {addClass} from './utils/cssClassHelpers.js';
import animateBoxes from './animations/boxes.js';
import debounce from './utils/debouncer.js';
import {delegateScrollTo} from './interactions/events.js';
import imagesLoaded from 'imagesloaded';
import initMobileMenu from './interactions/mobile-menu';

window.jQuery = require('jquery');

window.waypoints = new Waypoints(document.querySelector('#main-scrollbar'));
let _animate;

document.addEventListener('DOMContentLoaded', function() {
	if (window.matchMedia('(max-width: 768px)').matches) {
		initMobileMenu();
	}

	let cardEl = document.querySelector('.js-slider');
	if (cardEl) {
		ReactDOM.render(
			<Slider />,
			cardEl
		);
	}

	window.waypoints = new Waypoints(document.querySelector('#main-scrollbar'));
	window.waypoints.disableXAxisScroll();
	_animate = new Animate();

	attachScrollTos();

	const imgLoaded = imagesLoaded(document.querySelector('.js-body'), { background: true });
	imgLoaded.on('always', triggerImgsLoaded);

	let debouncedScroll = debounce(onScroll, 250);
	window.waypoints.addListener(debouncedScroll);
});

function attachScrollTos() {
	const arrow = document.querySelector('.scroll__down');
	const sectionOne = document.querySelector('.section--about');
	if (arrow) {
		delegateScrollTo(arrow, sectionOne);
	}

	const menuItems = document.querySelectorAll('.js-nav');
	menuItems.forEach(function(menuItem) {
		const target = document.querySelector('.' + menuItem.dataset.target);
		delegateScrollTo(menuItem, target);
	}, this);
}

function triggerImgsLoaded() {
	const images = Array.prototype.slice.call(document.querySelectorAll('img'));

	for (var index = 0; index < images.length; index++) {
		const img = images[index];
		addClass(img, 'img--loaded');
	}
}

function onScroll(callback) {
	const methodOne = document.querySelector('.method--section1');
	if (window.waypoints.isVisible(methodOne)) {
		_animate.drawPin();
	}
}
