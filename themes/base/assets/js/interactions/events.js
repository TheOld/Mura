import {setActiveMenuItem} from './mobile-menu.js';
export function delegateScrollTo(element, target) {
	element.addEventListener('click', (e) => scrollTo(e, target), false);
}

export function delegateOnFocus(element) {
	element.addEventListener('focus', (e) => {
	}, false);
}

function scrollTo(e, target) {
	e.preventDefault();
	window.waypoints.scrollIntoView(target);
	let newTarget = e.target;

	if (!newTarget.dataset.target) {
		newTarget = newTarget.parentElement;
	}
	setActiveMenuItem(newTarget.dataset.target || newTarget.getAttribute('[data-target]'));
}
