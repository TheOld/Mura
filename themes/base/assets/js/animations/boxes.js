import Cycle from 'cycle-array';
import anime from 'animejs';

export function animateBoxes() {
	const boxContainer = document.querySelector('.js-boxes');
	const boxes = boxContainer.children;
	const cycle = new Cycle();

	if (!window.boxesCycle) {
		window.boxesCycle = setInterval(() => {
			let activeImage = cycle(boxes);
			for (var index = 0; index < boxes.length; index++) {
				var box = boxes[index];

				if (box !== activeImage) {
					anime({
						targets: box,
						opacity: 0,
						duration: 80
					});
				}
			}
			anime({
				targets: activeImage,
				opacity: 1,
				duration: 80
			});
		}, 340);
	}
};

export function destroyAnimBoxes() {
	clearInterval(window.boxesCycle);
	window.boxesCycle = null;
}
