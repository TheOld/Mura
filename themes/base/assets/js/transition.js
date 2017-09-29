import Barba from 'barba.js';
import Slide from './transitions/Slide.js';
// import initImagesLoaded from './imagesloaded-controller.js';
export default function initTransitionController() {
	// Barba.Prefetch.init();
	Barba.Pjax.start();
	attachDoneListener();

	Barba.Pjax.getTransition = function() {
		/**
		 * Here you can use your own logic!
		 * For example you can use different Transition based on the current page or link...
		 */

		// console.log('Barba current URL:', Barba.Utils.getCurrentUrl());
		return Slide;
	};
}

function attachDoneListener() {
	Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {

	});
}
