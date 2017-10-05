'use strict';

export function addClass(element, className) {
	if (element.classList) {
		element.classList.add(className);
	} else if (!hasClass(element, className)) { element.className += ' ' + className; }
}

export function removeClass(element, className) {
	if (element.classList) {
		element.classList.remove(className);
	} else if (hasClass(element, className)) {
		let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		element.className = element.className.replace(reg, ' ');
	}
}

export function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

export function toggleClass(element, cls) {
	if (hasClass(element, cls)) {
		removeClass(element, cls);
	} else {
		addClass(element, cls);
	}
}

export function isHidden(element) {
	if (element.offsetWidth === 0 && element.offsetHeight === 0) {
		return true;
	}
}

export function findAncestor(el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}
