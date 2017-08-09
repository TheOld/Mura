'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from 'smooth-scrollbar';
import Slider from './components/Slider/Slider.js';
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
});
