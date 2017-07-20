
'use strict';

/*global ss*/

export function isInView(element) {
	let elemTop = element.getBoundingClientRect().top;
	let elemBottom = element.getBoundingClientRect().bottom;
	let innerHeight = window.innerHeight;
	let isVisible = (elemTop >= 0) && ((elemBottom - (innerHeight / 4)) <= window.innerHeight);

	return isVisible;
}

export function isHidden(element) {
	if (element.offsetWidth === 0 && element.offsetHeight === 0) {
		return true;
	}
}

export function findAncestor(element, className) {
	while ((element = element.parentElement) && !element.classList.contains(className));
	return element;
}

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

export function storageSetItem(_objKey, _objectValue) {
	window.sessionStorage.setItem(_objKey, JSON.stringify(_objectValue));
}

export function storageGetItem(_objKey) {
	let retrievedObject = window.sessionStorage.getItem(_objKey);
	return JSON.parse(retrievedObject);
}

export function toCamelCase(str) {
	return str.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
		if (p2) return p2.toUpperCase();
		return p1.toLowerCase();
	});
}

export function getMonthNumber(name) {
	switch (name) {
		case 'January':
			return 1;
		case 'February':
			return 2;
		case 'March':
			return 3;
		case 'April':
			return 4;
		case 'May':
			return 5;
		case 'June':
			return 6;
		case 'July':
			return 7;
		case 'August':
			return 8;
		case 'September':
			return 9;
		case 'October':
			return 10;
		case 'November':
			return 11;
		case 'December':
			return 12;
		default:
			return 'All';
	}
}

export function getMonthName(pNumber) {
	switch (pNumber) {
		case 1:
			return ss.i18n._t('Month.Jan');
		case 2:
			return ss.i18n._t('Month.Fev');
		case 3:
			return ss.i18n._t('Month.Mar');
		case 4:
			return ss.i18n._t('Month.Apr');
		case 5:
			return ss.i18n._t('Month.May');
		case 6:
			return ss.i18n._t('Month.Jun');
		case 7:
			return ss.i18n._t('Month.Jul');
		case 8:
			return ss.i18n._t('Month.Aug');
		case 9:
			return ss.i18n._t('Month.Sep');
		case 10:
			return ss.i18n._t('Month.Oct');
		case 11:
			return ss.i18n._t('Month.Nov');
		case 12:
			return ss.i18n._t('Month.Dec');
		default:
			return 'All';
	}
}

export function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

export function replaceSpacesWithDashes(str) {
	return str.replace(/\s+/g, '-').toLowerCase();
}

export function replaceSpacesWithPlus(str) {
	return str.replace(/\s+/g, '+').toLowerCase();
}

export function trimTrailingSlash(str) {
	return str.replace(/\/$/, '');
}

export function updateUrlParameter(uri, key, value) {
	// remove the hash part before operating on the uri
	let i = uri.indexOf('#');
	let hash = i === -1 ? '' : uri.substr(i);
	uri = i === -1 ? uri : uri.substr(0, i);

	let re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
	let separator = uri.indexOf('?') !== -1 ? '&' : '?';

	if (!value) {
		// remove key-value pair if value is empty
		uri = uri.replace(new RegExp('([?&]?)' + key + '=[^&]*', 'i'), '');
		if (uri.slice(-1) === '?') {
			uri = uri.slice(0, -1);
		}
		// replace first occurrence of & by ? if no ? is present
		if (uri.indexOf('?') === -1) uri = uri.replace(/&/, '?');
	} else if (uri.match(re)) {
		uri = uri.replace(re, '$1' + key + '=' + value + '$2');
	} else {
		uri = uri + separator + key + '=' + value;
	}
	return uri + hash;
}

export function removeURLParameter(url, parameter) {
	// prefer to use l.search if you have a location/link object
	let urlparts = url.split('?');
	if (urlparts.length >= 2) {
		let prefix = encodeURIComponent(parameter) + '=';
		let pars = urlparts[1].split(/[&;]/g);
		// reverse iteration as may be destructive
		for (var i = pars.length; i-- > 0;) {
			// idiom for string.startsWith
			if (pars[i].lastIndexOf(prefix, 0) !== -1) {
				pars.splice(i, 1);
			}
		}
		url = urlparts[0] + '?' + pars.join('&');
		return url;
	} else {
		return url;
	}
}

export function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

export function getBaseURLFromHub() {
	if (typeof window.location.origin === 'undefined') {
		window.location.origin = window.location.host;
	}
	let page = document.querySelector('[data-newsarticle]') ||
	document.querySelector('[data-newshub]') ||
	document.querySelector('[data-vacancyhub]') ||
	document.querySelector('[data-dochub]');

	let urlSegment = '';
	if (page) {
		let url = page.getAttribute('data-url');
		if (url.indexOf('/') === 0) {
			urlSegment = url.replace('/', '');
		} else {
			urlSegment = url;
		}
	}
	return window.location.origin + '/' + urlSegment;
}

export function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this;
		let args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {
			func.apply(context, args);
		}
	};
};
