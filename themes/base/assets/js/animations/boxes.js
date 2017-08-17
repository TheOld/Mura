import Cycle from 'cycle-array';
import anime from 'animejs';
export default function animateBoxes() {
	const boxContainer = document.querySelector('.js-boxes');
	const boxes = boxContainer.children;
	const cycle = new Cycle();
	setInterval(() => {
		let activeImage = cycle(boxes);
		for (var index = 0; index < boxes.length; index++) {
			var box = boxes[index];

			if (box !== activeImage) {
				anime({
					targets: box,
					opacity: 0,
					duration: 120
				});
			}
		}
		anime({
			targets: activeImage,
			opacity: 1,
			duration: 120
		});
	}, 220);
};

function animateIn(image) {
	anime({
		targets: image,
		opacity: 1,
		duration: 320
	});
}
