'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from 'smooth-scrollbar';
import Slider from './components/Slider/Slider.js';
import {addClass} from './utils/cssClassHelpers.js';
import imagesLoaded from 'imagesloaded';
import initMobileMenu from './interactions/mobile-menu';

window.jQuery = require('jquery');

document.addEventListener('DOMContentLoaded', function() {
	if (window.matchMedia('(max-width: 768px)').matches) {
		initMobileMenu();
	}

	Scrollbar.initAll();

	let cardEl = document.querySelector('.js-slider');
	if (cardEl) {
		ReactDOM.render(
			<Slider />,
			cardEl
		);
	}

	const imgLoaded = imagesLoaded(document.querySelector('.js-body'), { background: true });
	imgLoaded.on('always', triggerImgsLoaded);
});

function triggerImgsLoaded() {
	// Init ImagesLoaded for all images
	const images = Array.prototype.slice.call(document.querySelectorAll('img'));

	for (var index = 0; index < images.length; index++) {
		const img = images[index];
		addClass(img, 'img--loaded');
	}
}
