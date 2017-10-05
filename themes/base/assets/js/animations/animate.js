import anime from 'animejs';

class Animate {
	static drawIconContent(target, duration, delayMult) {
		anime({
			targets: target,
			strokeDashoffset: [anime.setDashoffset, 0],
			opacity: 1,
			easing: 'easeInOutSine',
			duration: duration,
			delay: function(el, i) { return i * delayMult; }
		});
	}

	static drawPin() {
		window.pinLoaded = true;
		window.requestAnimationFrame(() => {
			anime({
				targets: '.js-pinbg',
				opacity: 1,
				easing: 'easeInOutSine',
				duration: 300,
				complete: this.drawIconContent('.symbol--pin .pin__lines path', 300, 280)
			});
		});
	}

	static drawFile() {
		window.fileLoaded = true;
		window.requestAnimationFrame(() => {
			anime({
				targets: '.symbol--file',
				opacity: 1,
				easing: 'easeInOutSine',
				duration: 220,
				complete: this.drawIconContent('.symbol--file .file__lines path', 220, 120)
			});
		});
	}

	static drawHorse() {
		window.horseLoaded = true;
		window.requestAnimationFrame(() => {
			anime({
				targets: '.symbol--horse',
				opacity: 1,
				easing: 'easeInOutSine',
				duration: 200,
				complete: this.drawIconContent('.symbol--horse path', 180, 180)
			});
		});
	}

	static drawBuilding() {
		window.buildingLoaded = true;
		window.requestAnimationFrame(() => {
			anime({
				targets: '.symbol--building',
				opacity: 1,
				easing: 'easeInOutSine',
				duration: 200,
				complete: this.drawIconContent('.symbol--building .building__lines path', 220, 220)
			});
		});
	}

	// Content
	static animateIn(el) {
		el.classList.add('method--active');
	}
};

export default Animate;
