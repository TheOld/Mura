import {addClass, findAncestor, hasClass, removeClass} from '../helpers/helpers.js';

class SlidingContent {
	static attachListeners() {
		let occItems = document.querySelectorAll('.occ__item');
		for (var index = 0; index < occItems.length; index++) {
			var item = occItems[index];
			item.addEventListener('click', (e) => this.togglePanel(e), false);
		}

		let occMenuItems = document.querySelectorAll('.occ__menuitem');
		for (var i = 0; i < occItems.length; i++) {
			var menuitem = occMenuItems[i];
			menuitem.addEventListener('click', (e) => this.toggleContent(e), false);
		}

		const back = document.querySelector('.occ__back');
		back.addEventListener('click', (e) => this.togglePanel(e), false);
	}

	static togglePanel(e) {
		if (e) {
			e.preventDefault();
		}

		let item = e.target;

		if (!hasClass(item, 'occ__item')) {
			item = findAncestor(e.target, 'occ__item');
		}

		const container = document.querySelector('.occ__container');
		const openClass = 'occ__container--open';
		const contentOpenClass = 'occ__wrapper--active';
		const contentWrappers = document.querySelectorAll('.occ__wrapper');
		const footer = document.querySelector('.occ__footer');
		const bg = document.querySelector('.occ__bg');
		let menuItems = document.querySelectorAll('.occ__menuitem');

		if (hasClass(container, openClass)) {
			removeClass(container, openClass);

			for (var index = 0; index < contentWrappers.length; index++) {
				var element = contentWrappers[index];
				removeClass(element, contentOpenClass);
			}

			for (var i = 0; i < menuItems.length; i++) {
				var el = menuItems[i];
				removeClass(el, 'occ__menuitem--active');
			}

			bg.style.transform = 'translate3d(0, 0, 0)';
		} else {
			const itemTarget = item.dataset.target || item.getAttribute('[data-target]');
			const target = document.querySelector('.js-' + itemTarget);

			addClass(container, openClass);
			addClass(target, contentOpenClass);

			for (var menuIndex = 0; menuIndex < menuItems.length; menuIndex++) {
				var menuItem = menuItems[menuIndex];
				if (hasClass(menuItem, 'occ__menuitem--' + itemTarget)) {
					if (hasClass(menuItem, 'occ__menuitem--family')) {
						bg.style.transform = 'translate3d(0, 0, 0)';
						footer.style.transform = 'translate3d(0, 0, 0)';
					} else if (hasClass(menuItem, 'occ__menuitem--enterprise')) {
						bg.style.transform = 'translate3d(0, -330px, 0)';
						footer.style.transform = 'translate3d(0, -330px, 0)';
					} else {
						bg.style.transform = 'translate3d(0, -460px, 0)';
						footer.style.transform = 'translate3d(0, -454px, 0)';
					}
					addClass(menuItem, 'occ__menuitem--active');
					break;
				}
			}
		}

		window.waypoints.scrollIntoView(document.querySelector('.occ__details'));
	}

	static toggleContent(e) {
		e.preventDefault();

		let element = e.target;
		let content;
		let icon;
		let bg = document.querySelector('.occ__bg');
		let icons = document.querySelectorAll('.occ__icon');
		let menuItems = document.querySelectorAll('.occ__menuitem');
		let contentWrappers = document.querySelectorAll('.occ__wrapper');
		const footer = document.querySelector('.occ__footer');

		for (var i = 0; i < icons.length; i++) {
			removeClass(icons[i], 'occ__icon--active');
		}

		for (var menuIndex = 0; menuIndex < menuItems.length; menuIndex++) {
			var menuItem = menuItems[menuIndex];
			removeClass(menuItem, 'occ__menuitem--active');
		}

		for (var index = 0; index < contentWrappers.length; index++) {
			var el = contentWrappers[index];
			removeClass(el, 'occ__wrapper--active');
		}

		if (hasClass(element, 'occ__menuitem--family')) {
			content = document.querySelector('.js-family');
			icon = document.querySelector('.js-iconfamily');
			bg.style.transform = 'translate3d(0, 0, 0)';
			footer.style.transform = 'translate3d(0, 0, 0)';
		} else if (hasClass(element, 'occ__menuitem--enterprise')) {
			content = document.querySelector('.js-enterprise');
			icon = document.querySelector('.js-iconenterprise');
			bg.style.transform = 'translate3d(0, -330px, 0)';
			footer.style.transform = 'translate3d(0, -330px, 0)';
		} else {
			content = document.querySelector('.js-person');
			icon = document.querySelector('.js-iconperson');
			bg.style.transform = 'translate3d(0, -460px, 0)';
			footer.style.transform = 'translate3d(0, -460px, 0)';
		}

		addClass(content, 'occ__wrapper--active');
		addClass(element, 'occ__menuitem--active');
		addClass(icon, 'occ__icon--active');
	}
};
export default SlidingContent;
