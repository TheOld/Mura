import {addClass, findAncestor, hasClass, removeClass} from '../helpers/helpers.js';

class SlidingContent {
	static attachListeners() {
		let occItems = document.querySelectorAll('.occ__item');
		for (var index = 0; index < occItems.length; index++) {
			var item = occItems[index];
			item.addEventListener('click', this.redirect, false);
		}

		let servicesMenuItems = document.querySelectorAll('.services__menuitem');
		if (servicesMenuItems.length > 0) {
			for (var i = 0; i < servicesMenuItems.length; i++) {
				var menuitem = servicesMenuItems[i];
				menuitem.addEventListener('click', this.toggleContent, false);
			}
		}
	}

	static setInitialContent() {
		const hash = window.location.hash;

		if (hash) {
			let content;
			let icon;
			let detailsWrapper = document.querySelector('.services__detailswrapper');
			let wrapperBottom = 77;
			let height;
			let element;

			if (window.matchMedia('(min-width: 321px)').matches) {
				wrapperBottom = 377;
			}

			if (window.matchMedia('(min-width: 375px)').matches) {
				wrapperBottom = 277;
			}

			if (window.matchMedia('(min-width: 768px)').matches) {
				wrapperBottom = 377;
			}

			if (window.matchMedia('(min-width: 1024px)').matches) {
				wrapperBottom = 573;
			}

			switch (hash) {
				case '#enterprise':
					content = document.querySelector('.js-enterprise');
					icon = document.querySelector('.js-iconenterprise');
					height = content.clientHeight;

					if (window.matchMedia('(max-width: 321px)').matches) {
						detailsWrapper.style.height = (height + wrapperBottom) + 'px';
					} else if (window.matchMedia('(max-width: 769px)').matches) {
						detailsWrapper.style.height = (height + wrapperBottom + 30) + 'px';
					} else {
						detailsWrapper.style.height = (height + wrapperBottom) + 'px';
					}

					element = document.querySelector('.services__menuitem--enterprise');
					window.requestAnimationFrame(() => {
						addClass(content, 'services__wrapper--active');
						addClass(element, 'services__menuitem--active');
						addClass(icon, 'services__icon--active');
					});
					break;
				case '#person':
					content = document.querySelector('.js-person');
					icon = document.querySelector('.js-iconperson');
					height = content.clientHeight;
					detailsWrapper.style.height = (height + wrapperBottom) + 'px';
					element = document.querySelector('.services__menuitem--person');
					window.requestAnimationFrame(() => {
						addClass(content, 'services__wrapper--active');
						addClass(element, 'services__menuitem--active');
						addClass(icon, 'services__icon--active');
					});
					break;
				default:
					content = document.querySelector('.js-family');
					icon = document.querySelector('.js-iconfamily');
					height = content.clientHeight;
					if (window.matchMedia('(max-width: 321px)').matches) {
						detailsWrapper.style.height = (height + wrapperBottom) + 'px';
					} else if (window.matchMedia('(max-width: 769px)').matches) {
						detailsWrapper.style.height = (height + wrapperBottom + 30) + 'px';
					} else {
						detailsWrapper.style.height = (height + wrapperBottom) + 'px';
					}
					element = document.querySelector('.services__menuitem--family');
					window.requestAnimationFrame(() => {
						addClass(content, 'services__wrapper--active');
						addClass(element, 'services__menuitem--active');
						addClass(icon, 'services__icon--active');
					});
					break;
			}
		}
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
				window.requestAnimationFrame(() => {
					removeClass(element, contentOpenClass);
				});
			}

			for (var i = 0; i < menuItems.length; i++) {
				var el = menuItems[i];
				window.requestAnimationFrame(() => {
					removeClass(el, 'occ__menuitem--active');
				});
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
		window.requestAnimationFrame(() => {
			window.waypoints.scrollIntoView(document.querySelector('.occ__details'));
		});
	}

	static toggleContent(e) {
		e.preventDefault();

		let element = e.target;
		let content;
		let icon;
		let detailsWrapper = document.querySelector('.services__detailswrapper');
		let icons = document.querySelectorAll('.services__icon');
		let menuItems = document.querySelectorAll('.services__menuitem');
		let contentWrappers = document.querySelectorAll('.services__wrapper');
		// const footer = document.querySelector('.services__footer');

		let wrapperBottom = 77;

		if (window.matchMedia('(min-width: 321px)').matches) {
			wrapperBottom = 377;
		}

		if (window.matchMedia('(min-width: 375px)').matches) {
			wrapperBottom = 277;
		}

		if (window.matchMedia('(min-width: 768px)').matches) {
			wrapperBottom = 377;
		}

		if (window.matchMedia('(min-width: 1024px)').matches) {
			wrapperBottom = 573;
		}

		console.log(wrapperBottom);

		for (var i = 0; i < icons.length; i++) {
			removeClass(icons[i], 'services__icon--active');
		}

		for (var menuIndex = 0; menuIndex < menuItems.length; menuIndex++) {
			var menuItem = menuItems[menuIndex];
			removeClass(menuItem, 'services__menuitem--active');
		}

		for (var index = 0; index < contentWrappers.length; index++) {
			var el = contentWrappers[index];
			removeClass(el, 'services__wrapper--active');
		}

		if (hasClass(element, 'services__menuitem--family')) {
			content = document.querySelector('.js-family');
			icon = document.querySelector('.js-iconfamily');
			let height = content.clientHeight;
			detailsWrapper.style.height = (height + wrapperBottom) + 'px';
		} else if (hasClass(element, 'services__menuitem--enterprise')) {
			content = document.querySelector('.js-enterprise');
			icon = document.querySelector('.js-iconenterprise');
			let height = content.clientHeight;
			if (window.matchMedia('(max-width: 321px)').matches) {
				detailsWrapper.style.height = (height + wrapperBottom + 120) + 'px';
			} else if (window.matchMedia('(max-width: 769px)').matches) {
				detailsWrapper.style.height = (height + wrapperBottom + 140) + 'px';
			} else {
				detailsWrapper.style.height = (height + wrapperBottom) + 'px';
			}
		} else {
			content = document.querySelector('.js-person');
			icon = document.querySelector('.js-iconperson');
			let height = content.clientHeight;
			if (window.matchMedia('(max-width: 321px)').matches) {
				detailsWrapper.style.height = (height + wrapperBottom + 120) + 'px';
			} else if (window.matchMedia('(max-width: 769px)').matches) {
				detailsWrapper.style.height = (height + wrapperBottom + 140) + 'px';
			} else {
				detailsWrapper.style.height = (height + wrapperBottom) + 'px';
			}
		}

		window.requestAnimationFrame(() => {
			addClass(content, 'services__wrapper--active');
			addClass(element, 'services__menuitem--active');
			addClass(icon, 'services__icon--active');
		});
	}

	static redirect(e) {
		let el = e.target;

		if (!hasClass(el, 'occ__item')) {
			el = findAncestor(el, 'occ__item');
		}

		const target = el.dataset.target || el.getAttribute('[data-target]');
		window.location.href = window.location.href + 'atuacao/#' + target;
	}
};
export default SlidingContent;
