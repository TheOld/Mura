
export function delegateScrollTo(element, target) {
	element.addEventListener('click', () => scrollTo(target), false);
}

function scrollTo(target) {
	window.waypoints.scrollIntoView(target);
}
