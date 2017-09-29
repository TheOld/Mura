import {addClass, removeClass} from '../helpers/helpers.js';
class ScrollListener {
	constructor(scrollBars) {
		this.menu = document.querySelector('.fixedmenu');
		this.lastScrollTop = 0;
		this.scrollBar = window.waypoints;
	}
	watchMenu() {
		let distance = this.scrollBar.getScrollTop();

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
};

export default ScrollListener;
