import anime from 'animejs';

export function initLineAnimation() {
	const line1 = document.querySelector('#line-1');
	const line2 = document.querySelector('#line-2');

	animateLine(line1);
}

function animateLine1() {
	anime({
		targets: '#line-1 .line path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1500,
		delay: function(el, i) { return i * 250; },
		direction: 'alternate',
		loop: true
	});
}
