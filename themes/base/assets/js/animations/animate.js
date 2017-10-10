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

		anime({
			targets: '.js-pinbg',
			opacity: 1,
			easing: 'easeInOutSine',
			duration: 300,
			complete: this.drawIconContent('.symbol--pin .pin__lines path', 300, 280)
		});
	}

	static drawFile() {
		window.fileLoaded = true;

		anime({
			targets: '.symbol--file',
			opacity: 1,
			easing: 'easeInOutSine',
			duration: 220,
			complete: this.drawIconContent('.symbol--file .file__lines path', 220, 120)
		});
	}

	static drawHorse() {
		window.horseLoaded = true;

		anime({
			targets: '.symbol--horse',
			opacity: 1,
			easing: 'easeInOutSine',
			duration: 200,
			complete: this.drawIconContent('.symbol--horse path', 180, 180)
		});
	}

	static drawBuilding() {
		window.buildingLoaded = true;

		anime({
			targets: '.symbol--building',
			opacity: 1,
			easing: 'easeInOutSine',
			duration: 200,
			complete: this.drawIconContent('.symbol--building .building__lines path', 220, 220)
		});
	}

	static animateLetters(target, duration) {
		console.log(target + '.letter');
		anime.timeline({loop: false})
		.add({
			targets: target + ' .letter',
			translateX: [40, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: 'easeInOutSine',
			duration: duration,
			delay: function(el, i) {
				return 500 + 30 * i;
			}
		});

		switch (target) {
			case '.js--introtitle':
				window.introTitle = true;
				break;
			case '.js--methodtitle':
				window.methodTitle = true;
				break;
		}
	}

	// Content
	static animateIn(el) {
		el.classList.add('method--active');
	}
};

export default Animate;
