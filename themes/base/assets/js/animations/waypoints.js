'use strict';

import {addClass, addClassFunc} from '../helpers/helpers';
import Animate from './animate';

/* global  */

class Waypoints {
	static showContent(section) {
		if (section.classList.contains('section--0')) {
			if (!window.introTitle) {
				Animate.animateLetters('.js--introtitle', 2800);
			}
		}

		if (section.classList.contains('section--about')) {
			const whoTitle = document.querySelector('.who__title');
			const whoLeadin = document.querySelector('.who__leadin');
			const copies = section.querySelectorAll('.about__copy');

			addClass(whoTitle, 'who__title--active');
			addClass(whoLeadin, 'who__leadin--active');

			for (let index = 0; index < copies.length; index++) {
				let addLoadedClassFn = addClassFunc(index, copies, 'about__copy--active');
				setTimeout(addLoadedClassFn, index * 65);
			};
		}

		if (section.classList.contains('section--method')) {
			if (!window.methodTitle) {
				Animate.animateLetters('.js--methodtitle', 400);
			}
		}

		switch (section.id) {
			case 'method1':
				if (!window.pinLoaded) {
					Animate.drawPin();
				}
				break;
			case 'method2':
				if (!window.fileLoaded) {
					Animate.drawFile();
				}
				break;
			case 'method3':
				if (!window.horseLoaded) {
					Animate.drawHorse();
				}
				break;
			case 'method4':
				if (!window.buildingLoaded) {
					Animate.drawBuilding();
				}
				break;
		}
	}
};

export default Waypoints;
