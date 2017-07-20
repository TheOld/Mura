'use strict';

// import Scrollbar from 'smooth-scrollbar';
import initMobileMenu from './interactions/mobile-menu';

window.jQuery = require('jquery');

document.addEventListener('DOMContentLoaded', function() {
	if (window.matchMedia('(max-width: 768px)').matches) {
		initMobileMenu();
	}
});
