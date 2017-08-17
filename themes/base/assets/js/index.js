'use strict';

import Animate from './animations/animate.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider/Slider.js';
import Waypoints from './animations/waypoints.js';
import {addClass} from './utils/cssClassHelpers.js';
import animateBoxes from './animations/boxes.js';
import debounce from './utils/debouncer.js';
import imagesLoaded from 'imagesloaded';
import initMobileMenu from './interactions/mobile-menu';

window.jQuery = require('jquery');

let waypoints;
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

	waypoints = new Waypoints(document.querySelector('#main-scrollbar'));
	_animate = new Animate();

	const imgLoaded = imagesLoaded(document.querySelector('.js-body'), { background: true });
	imgLoaded.on('always', triggerImgsLoaded);

	let debouncedScroll = debounce(onScroll, 250);
	waypoints.addListener(debouncedScroll);
});

function triggerImgsLoaded() {
	// Init ImagesLoaded for all images
	const images = Array.prototype.slice.call(document.querySelectorAll('img'));

	for (var index = 0; index < images.length; index++) {
		const img = images[index];
		addClass(img, 'img--loaded');
	}
}

function onScroll(callback) {
	const methodOne = document.querySelector('.method--section1');
	console.log(waypoints.isVisible(methodOne));
	if (waypoints.isVisible(methodOne)) {
		_animate.drawPin();
	}
}
