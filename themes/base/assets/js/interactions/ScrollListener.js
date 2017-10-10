'use strict';

import {addClass, removeClass, inViewport} from '../helpers/helpers.js';
import Waypoints from '../animations/waypoints';
// import inViewport from 'in-viewport';

class ScrollListener {
	constructor(scrollBars) {
		this.menu = document.querySelector('.fixedmenu');
		this.lastScrollTop = 0;
		this.sections = document.querySelectorAll('.section');
	}
	watchMenu() {
		let distance = window.scrollY; // this.scrollBar.getScrollTop();

		if (Math.abs(this.lastScrollTop - distance) <= 120) {
			return;
		}

		if (distance < this.lastScrollTop) {
			addClass(this.menu, 'fixedmenu--open');
			window.isNavbarOpen = true;
		} else {
			removeClass(this.menu, 'fixedmenu--open');
			window.isNavbarOpen = false;
		}

		if (distance <= 80 && window.isNavbarOpen) {
			removeClass(this.menu, 'fixedmenu--open');
			window.isNavbarOpen = false;
		}

		this.lastScrollTop = distance;
	}

	watchSections() {
		for (var index = 0; index < this.sections.length; index++) {
			const section = this.sections[index];
			// console.log(section);
			// console.log(inViewport(section, {container: document.querySelector('body')}));
			// if (inViewport(section, {container: document.querySelector('body')})) {
			// 	Waypoints.showContent(section);
			// }

			if (inViewport(section)) {
				Waypoints.showContent(section);
			}
		}
	}
};

export default ScrollListener;
