import Barba from 'barba.js';
import anime from 'animejs';

/**
 * Modified from barbajs.org
 */

var Slide = Barba.BaseTransition.extend({
	start: function() {
		/**
		 * This function is automatically called as soon the Transition starts
		 * this.newContainerLoading is a Promise for the loading of the new container
		 * (Barba.js also comes with an handy Promise polyfill!)
		 */

		// As soon the loading is finished and the old page is faded out, let's fade the new page
		Promise
			.all([this.newContainerLoading, this.slideLeftOut()])
			.then(this.slideRightIn.bind(this));
	},

	slideLeftOut: function() {
		/**
		 * this.oldContainer is the HTMLElement of the old Container
		 */
		// removeClass(this.oldContainer, 'slide__rightin');
		// return addClass(this.oldContainer, 'slide__outleft');
		return anime({
			targets: [this.oldContainer],
			opacity: 0,
			// scale: 0.3,
			duration: 220,
			easing: [0.120, 0.825, 0.230, 1.000]
		}).finished;
	},

	slideRightIn: function() {
		var $el = this.newContainer;

		// hide old container
		this.oldContainer.style.display = 'none';

		// set css for the new container
		$el.style.opacity = 0;
		$el.style.visibility = 'visible';
		document.body.scrollTop = 0;

		// animate
		anime({
			targets: [$el],
			opacity: 1,
			duration: 220,
			// translateX: ['100%', 0],
			easing: [0.120, 0.825, 0.230, 1.000],
			complete: () => {
				this.done();
			}
		});
	}
});

module.exports = Slide;
