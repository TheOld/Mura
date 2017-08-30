import anime from 'animejs';

class Animate {
	drawPin() {
		anime({
			targets: '.js-pinbg',
			opacity: 1,
			easing: 'easeInOutSine',
			duration: 500,
			complete: this.drawContent()
		});
	}

	drawContent() {
		anime({
			targets: '.symbol--pin .pin__lines path',
			strokeDashoffset: [anime.setDashoffset, 0],
			opacity: 1,
			easing: 'easeInOutSine',
			duration: 1500,
			delay: function(el, i) { return i * 250; }
		});
	}
};

export default Animate;
