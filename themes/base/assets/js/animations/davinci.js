import $ from 'jquery';
import Animate from './animate.js';
import {hasClass, addClass} from '../helpers/helpers';

// let PROPERTIES = ['translateX', 'translateY', 'opacity', 'rotate', 'scale'];
let	$window = $(window);
let	$body = $('body');
let	wrappers = [];
let	currentWrapper = null;
// let	scrollTimeoutID = 0;
let selectedKeyframes = [];
let	scrollIntervalID = 0;
let	bodyHeight = 0;
let	windowHeight = 0;
let	windowWidth = 0;
let	prevKeyframesDurations = 0;
let	scrollTop = 0;
let	relativeScrollTop = 0;
let	currentKeyframe = 0;

let	keyframesLg = [
	{
		'wrapper': '.title__wrapper',
		'duration': '50%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.section__logo__bg',
				'translateY': -110,
				'opacity': 0
			}
		]
	},
	{
		'wrapper': '#about',
		'duration': '10%',
		'isLoaded': false,
		'animations': [
			// {
			// 	'selector': '.who__title'
			// 	// 'translateY': [50, 0],
			// 	// 'opacity': [0, 1]
			// }
		]
	},
	{
		'wrapper': '.js--aboutlogowrapper',
		'duration': '45%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#about-logo',
				'translateY': [250, 0]
			}
		]
	},
	{
		'wrapper': '#team',
		'duration': '65%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#slider',
				'translateY': [300, 0]
			}
		]
	},
	{
		'wrapper': '#team',
		'duration': '100%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.team__sidelogo',
				'translateY': [0, -450]
			},
			{
				'selector': '.team__bg',
				'translateY': [0, -220]
			}
		]
	},
	{
		'duration': '85%',
		'animations': []
	},
		// Method 1
	{
		'wrapper': '#method1',
		'duration': '20%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number1',
				'translateX': [-50, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.js--header1',
				'translateY': [50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method1-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method1__title',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.method__copy--1',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method1-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method1-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
		// Method 2
	{
		'wrapper': '#method2',
		'duration': '20%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number2',
				'translateX': [-50, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.js--header2',
				'translateY': [50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method2-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method2__title',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.method__copy--2',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method2-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method2-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
			// Method 3
	{
		'wrapper': '#method3',
		'duration': '20%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number3',
				'translateX': [-50, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.js--header3',
				'translateY': [50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method3-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method3__title',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.method__copy--3',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method3-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method3-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
				// Method 4
	{
		'wrapper': '#method4',
		'duration': '20%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number4',
				'translateX': [-50, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.js--header4',
				'translateY': [50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method4-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method4__title',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.method__copy--last',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method4-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method4-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'duration': '100%',
		'isLoaded': false,
		'animations': []
	}
];

let	keyframesDt = [
	{
		'wrapper': '.title__wrapper',
		'duration': '50%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--introtitle_',
				'translateY': -140,
				'opacity': 0
			}, {
				'selector': '.js--introleadin_',
				'translateY': -110,
				'opacity': 0
			}
		]
	},
	{
		'wrapper': '#about',
		'duration': '10%',
		'isLoaded': false,
		'animations': [
			// {
			// 	'selector': '.who__title'
			// }
		]
	},
	{
		'wrapper': '.js--aboutlogowrapper',
		'duration': '45%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#about-logo',
				'translateY': [250, 0]
			}
		]
	},
	{
		'wrapper': '#team',
		'duration': '65%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#slider',
				'translateY': [300, 0]
			}
		]
	},
	{
		'wrapper': '#team',
		'duration': '100%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.team__sidelogo',
				'translateY': [0, -450]
			},
			{
				'selector': '.team__bg',
				'translateY': [0, -220]
			}
		]
	},

	{
		'duration': '200%',
		'isLoaded': false,
		'animations': []
	},
		// Method 1
	{
		'wrapper': '#method1',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number1',
				'translateX': [-50, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.js--header1',
				'translateY': [50, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method1-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method1__title',
				'translateY': [22, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.method__copy--1',
				'translateY': [22, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method1-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method1-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1]
			}
		]
	},
		// Method 2
	{
		'wrapper': '#method2',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number2',
				'translateX': [-50, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.js--header2',
				'translateY': [50, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method2-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method2__title',
				'translateY': [22, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.method__copy--2',
				'translateY': [22, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method2-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method2-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1]
			}
		]
	},
			// Method 3
	{
		'wrapper': '#method3',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number3',
				'translateX': [-50, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.js--header3',
				'translateY': [50, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method3-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method3__title',
				'translateY': [22, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.method__copy--3',
				'translateY': [22, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method3-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method3-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1]
			}
		]
	},
				// Method 4
	{
		'wrapper': '#method4',
		'duration': '20%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number4',
				'translateX': [-50, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.js--header4',
				'translateY': [50, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method4-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method4__title',
				'translateY': [22, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.method__copy--last',
				'translateY': [22, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method4-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method4-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'duration': '100%',
		'isLoaded': false,
		'animations': []
	}
];

let	keyframesMb = [
	{
		'wrapper': '.title__wrapper',
		'duration': '50%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--introtitle_',
				'translateY': -140,
				'opacity': 0
			}, {
				'selector': '.js--introleadin_',
				'translateY': -110,
				'opacity': 0
			}
		]
	},
	{
		'wrapper': '#about',
		'duration': '10%',
		'isLoaded': false,
		'animations': [
			// {
			// 	'selector': '.who__title'
			// }
		]
	},
	{
		'wrapper': '.js--aboutlogowrapper',
		'duration': '45%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#about-logo',
				'translateY': [250, 0]
			}
		]
	},
	{
		'wrapper': '#team',
		'duration': '65%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#slider',
				'translateY': [300, 0]
			}
		]
	},
	{
		'duration': '85%',
		'animations': []
	},
		// Method 1
	{
		'wrapper': '#method1',
		'duration': '35%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number1',
				'translateX': [-50, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.js--header1',
				'translateY': [50, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method1-content',
		'duration': '15%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method1__title',
				'translateY': [22, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.method__copy--1',
				'translateY': [22, 0],
				'opacity': [0, 1]
			}
		]
	},
	{
		'wrapper': '.js--method1-lead',
		'duration': '35%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method1-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1]
			}
		]
	},
		// Method 2
	{
		'wrapper': '#method2',
		'duration': '30%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number2',
				'translateX': [-50, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.js--header2',
				'translateY': [50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method2-content',
		'duration': '20%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method2__title',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.method__copy--2',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method2-lead',
		'duration': '20%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method2-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
			// Method 3
	{
		'wrapper': '#method3',
		'duration': '30%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number3',
				'translateX': [-50, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.js--header3',
				'translateY': [50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method3-content',
		'duration': '30%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method3__title',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.method__copy--3',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method3-lead',
		'duration': '15%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method3-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
				// Method 4
	{
		'wrapper': '#method4',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '#number4',
				'translateX': [-50, 0],
				'opacity': [0, 1]
			},
			{
				'selector': '.js--header4',
				'translateY': [50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method4-content',
		'duration': '5%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method4__title',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			},
			{
				'selector': '.method__copy--last',
				'translateY': [22, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'wrapper': '.js--method4-lead',
		'duration': '25%',
		'isLoaded': false,
		'animations': [
			{
				'selector': '.js--method4-lead',
				'translateY': [-50, 0],
				'opacity': [0, 1.25]
			}
		]
	},
	{
		'duration': '100%',
		'isLoaded': false,
		'animations': []
	}
];

class DaVinci {
	init() {
		this.getKeyframes();
		this.startInterval();
		this.setupValues();
	}

	startInterval() {
		scrollIntervalID = setInterval(() => {
			// let main = document.querySelector('main');
			// if (main.classList.contains('scrolling')) {
			this.updatePage();
			// }
		}, 1);
	}

	stopIntreval() {
		clearInterval(scrollIntervalID);
	}

	setupValues() {
		scrollTop = window.scrollY; // window.waypoints.getScrollTop();
		windowHeight = $window.height();
		windowWidth = $window.width();
		this.convertAllPropsToPx();
		this.buildPage();
	}

	buildPage() {
		window.requestAnimationFrame(() => {
			var i, j;
			let keyframes = selectedKeyframes;
			for (i = 0; i < keyframes.length; i++) { // loop keyframes
				bodyHeight += keyframes[i].duration;

				if ($.inArray(keyframes[i].wrapper, wrappers) === -1) {
					wrappers.push(keyframes[i].wrapper);
				}
				for (j = 0; j < keyframes[i].animations.length; j++) { // loop animations
					Object.keys(keyframes[i].animations[j]).forEach((key) => { // loop properties
						let value = keyframes[i].animations[j][key];
						if (key !== 'selector' && value instanceof Array === false) {
							var valueSet = [];
							valueSet.push(this.getDefaultPropertyValue(key), value);
							value = valueSet;
						}
						keyframes[i].animations[j][key] = value;
					});
				}
			}

			$body.height(bodyHeight);
			$window.scroll(0);
			currentWrapper = wrappers[0];
			$(currentWrapper).show();
		});
	}

	convertAllPropsToPx() {
		var i, j, k;
		let keyframes = selectedKeyframes;
		for (i = 0; i < keyframes.length; i++) { // loop keyframes
			keyframes[i].duration = this.convertPercentToPx(keyframes[i].duration, 'y');
			for (j = 0; j < keyframes[i].animations.length; j++) { // loop animations
				Object.keys(keyframes[i].animations[j]).forEach((key) => { // loop properties
					let value = keyframes[i].animations[j][key];
					if (key !== 'selector') {
						if (value instanceof Array) { // if its an array
							for (k = 0; k < value.length; k++) { // if value in array is %
								if (typeof value[k] === 'string') {
									if (key === 'translateY') {
										value[k] = this.convertPercentToPx(value[k], 'y');
									} else {
										value[k] = this.convertPercentToPx(value[k], 'x');
									}
								}
							}
						} else {
							if (typeof value === 'string') { // if single value is a %
								if (key === 'translateY') {
									value = this.convertPercentToPx(value, 'y');
								} else {
									value = this.convertPercentToPx(value, 'x');
								}
							}
						}
						keyframes[i].animations[j][key] = value;
					}
				});
			}
		}
	}

	getDefaultPropertyValue(property) {
		switch (property) {
			case 'translateX':
				return 0;
			case 'translateY':
				return 0;
			case 'scale':
				return 1;
			case 'rotate':
				return 0;
			case 'opacity':
				return 1;
			default:
				return null;
		}
	}

	updatePage() {
		window.requestAnimationFrame(() => {
			this.setScrollTops();
			if (scrollTop > 10 && scrollTop <= (bodyHeight - windowHeight)) {
				this.animateElements();
				this.setKeyframe();
			}
		});
	}

	setScrollTops() {
		scrollTop = window.scrollY || window.pageYOffset;
		relativeScrollTop = scrollTop - prevKeyframesDurations;
	}

	animateElements() {
		var animation, translateY, translateX, opacity;
		let keyframes = selectedKeyframes;
		for (var i = 0; i < keyframes[currentKeyframe].animations.length; i++) {
			animation = keyframes[currentKeyframe].animations[i];
			translateY = this.calcPropValue(animation, 'translateY');
			translateX = this.calcPropValue(animation, 'translateX');
			opacity = this.calcPropValue(animation, 'opacity');

			let el = document.querySelector(animation.selector);

			if (el) {
				el.style.transform = 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';
				el.style.opacity = opacity;
			}
		}
	};

	calcPropValue(animation, property) {
		let keyframes = selectedKeyframes;
		var value = animation[property];
		if (value) {
			value = this.easeInOutQuad(relativeScrollTop, value[0], (value[1] - value[0]), keyframes[currentKeyframe].duration);
		} else {
			value = this.getDefaultPropertyValue(property);
		}

		value = +value.toFixed(2);
		// TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE
		return value;
	};

	easeInOutQuad(t, b, c, d) {
		// sinusoadial in and out
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	};

	setKeyframe() {
		let keyframes = selectedKeyframes;
		if (scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
			prevKeyframesDurations += keyframes[currentKeyframe].duration;
			currentKeyframe++;
			this.showCurrentWrappers();
		} else if (scrollTop < prevKeyframesDurations) {
			currentKeyframe--;
			prevKeyframesDurations -= keyframes[currentKeyframe].duration;
			this.showCurrentWrappers();
		}
	};

	showCurrentWrappers() {
		// var i;
		let keyframes = selectedKeyframes;
		if (keyframes[currentKeyframe].wrapper !== currentWrapper) {
			// $(currentWrapper).fadeOut();
			$(keyframes[currentKeyframe].wrapper).show();
			currentWrapper = keyframes[currentKeyframe].wrapper;
		}

		this.animateIcon();
	};

	animateIcon() {
		if (currentWrapper === '#method1' && !window.pinLoaded) {
			setTimeout(() => {
				Animate.drawPin();
			}, 400);
		}
		if (currentWrapper === '#method2' && !window.fileLoaded) {
			setTimeout(() => {
				Animate.drawFile();
			}, 400);
		}
		if (currentWrapper === '#method3' && !window.horseLoaded) {
			setTimeout(() => {
				Animate.drawHorse();
			}, 400);
		}
		if (currentWrapper === '#method4' && !window.buildingLoaded) {
			setTimeout(() => {
				Animate.drawBuilding();
			}, 400);
		}
	};

	getKeyframes() {
		if (window.matchMedia('(max-width:568px)').matches && window.matchMedia('(max-width:767px)').matches) {
			selectedKeyframes = keyframesMb;
		}
		if (window.matchMedia('(min-width:768px)').matches && window.matchMedia('(max-width:1399px)').matches) {
			selectedKeyframes = keyframesDt;
		}
		if (window.matchMedia('(min-width:1400px)').matches) {
			selectedKeyframes = keyframesLg;
		}
	};

/*  Helpers
-------------------------------------------------- */

	convertPercentToPx(value, axis) {
		if (typeof value === 'string' && value.match(/%/g)) {
			if (axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
			if (axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
		}
		return value;
	};

	throwError() {
		$body.addClass('page-error');
	};

	isTouchDevice = function() {
		return 'ontouchstart' in window || // works on most browsers
  'onmsgesturechange' in window; // works on ie10
	};
}
export default DaVinci;
