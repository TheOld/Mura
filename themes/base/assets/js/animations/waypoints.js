'use strict';

import Scrollbar from 'smooth-scrollbar';

class Waypoints {
	constructor(elem) {
		this.scrollbar = Scrollbar.init(elem);
	}

	/**
	 * Checks if a given element is visible in the viewport
	 *
	 * @param {any} element
	 * @returns bool
	 * @memberof Waypoints
	 */
	isVisible(element) {
		return this.scrollbar.isVisible(element);
	}

	/**
	 * Scroll selected element into view
	 * Options are: [offsetTop, offsetLeft, onlyScrollIfNeeded]
	 * @param {any} element
	 * @param {array} options
	 * @memberof Waypoints
	 */
	scrollIntoView(element, options) {
		this.scrollbar.scrollIntoView(element, options);
	}

	/**
	 * Scroll to given position with easing, callback will be invoked with instance after scrolling
	 *
	 * @param {number} X axis  value
	 * @param {number} y axis value
	 * @param {number} duration in milisseconds
	 * @param {function} callback Function to invoke when the position is hit
	 * @memberof Waypoints
	 */
	scrollTo(x, y, duration, callback) {
		this.scrollbar.scrollTo(x, y, duration, (scrollbar) => {
			callback();
		});
	}

	addListener(fn) {
		this.scrollbar.addListener(fn);
	}
};

export default Waypoints;
