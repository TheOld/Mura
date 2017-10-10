import ScrollMagic from 'scrollmagic';
import anime from 'animejs';

class ScrollController {
	constructor(params) {
		this.controller = new ScrollMagic.Controller();
	}

	init() {

	}

	static scrollTo(target) {
		const { top } = target.getBoundingClientRect();
		const scroll = {
			y: window.pageYOffset
		};

		anime({
			targets: scroll,
			y: ((top + window.pageYOffset)),
			duration: 350,
			easing: 'easeInOutCubic',
			update: () => window.scroll(0, scroll.y)
		});
	}

	static toggleClass(section, target, cl) {
		new ScrollMagic.Scene({triggerElement: section}).setClassToggle(target, cl)
			.addTo(this.controller);
	}
}
export default ScrollController;
