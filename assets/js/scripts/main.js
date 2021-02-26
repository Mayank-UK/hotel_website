$(window).on('load', function () {
	/* 
	module structure example

	var module = (function() {
		properties 
		cache DOM
		bind events
		internal methods
		exposed methods
		return
	})();
	 */

	// mobile navigation module
	var mobileNav = (function () {
		// properties
		var togglableClass = 'm-nav-mobile__panel--hide';

		// cache DOM
		var hamburgerIcon = $('#j-hamburger');
		var navCrossIcon = $('.m-nav-mobile__panel-cross-icon');
		var navPanel = $('.m-nav-mobile__panel');
		var navLinks = $('.m-nav-mobile__panel-list-item');

		// bind events
		hamburgerIcon.click(_toggleNavPanelVisibility);
		navCrossIcon.click(_toggleNavPanelVisibility);
		navLinks.click(_toggleNavPanelVisibility);

		function _toggleNavPanelVisibility() {
			navPanel.toggleClass(togglableClass);
		}

		// return
		return {};
	})();

	// contact form module
	var contactForm = (function () {
		// cache DOM
		var submitButton = $('#j-contact-submit');

		// bind events
		submitButton.click(_submitForm);

		function _submitForm(e) {
			e.preventDefault();
			alert('this is demo form');
		}

		// return
		return {};
	})();

	// smooth scrolling module
	var smoothScroll = (function () {
		// cache DOM
		var smoothScrollTarget = $('a[href*="#"]');

		// internal methods
		_addSmoothScrolling();

		function _addSmoothScrolling() {
			smoothScrollTarget.smoothscroll({
				duration: 300,
			});
		}

		// return
		return {};
	})();

	// active navigation element module
	var activeNavigation = (function () {
		// properties
		var currentClassMobile = 'm-nav-mobile__anchor--active';
		var currentClassDesktop = 'm-nav-desktop__anchor--active';

		// cache DOM
		var sections = $('.m-main-section');
		var anchorLinksMobile = $('.m-nav-mobile__anchor');
		var anchorLinksDesktop = $('.m-nav-desktop__anchor');

		// internal methods
		_activeNavigationLinkMobile();
		_activeNavigationLinkDesktop();

		function _activeNavigationLinkMobile() {
			sections.headerhighlight({
				elementsChanging: anchorLinksMobile,
				currentClass: currentClassMobile,
				offset: 250,
			});
		}

		function _activeNavigationLinkDesktop() {
			sections.headerhighlight({
				elementsChanging: anchorLinksDesktop,
				currentClass: currentClassDesktop,
				offset: 250,
			});
		}

		// return
		return {};
	})();

	// scroll animations module
	var animateOnScroll = (function () {
		// internal methods
		_aosInit();

		function _aosInit() {
			AOS.init({
				// Global settings:
				disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
				startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
				initClassName: 'aos-init', // class applied after initialization
				animatedClassName: 'aos-animate', // class applied on animation
				useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
				disableMutationObserver: false, // disables automatic mutations' detections (advanced)
				debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
				throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

				// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
				offset: 120, // offset (in px) from the original trigger point
				delay: 0, // values from 0 to 3000, with step 50ms
				duration: 400, // values from 0 to 3000, with step 50ms
				easing: 'ease', // default easing for AOS animations
				once: true, // whether animation should happen only once - while scrolling down
				mirror: false, // whether elements should animate out while scrolling past them
				anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
			});
		}

		// return
		return {};
	})();
});
