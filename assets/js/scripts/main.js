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

	// active navigation element module
	var activeNavigation = (function () {
		// properties
		var currentClassMobile = 'm-nav-mobile__anchor--active';
		var currentClassDesktop = 'm-nav-desktop__anchor--active';

		// cache DOM
		var page = $('.l-main')[0];
		var anchorLinksMobile = $('.m-nav-mobile__anchor');
		var anchorLinksDesktop = $('.m-nav-desktop__anchor');

		// internal methods
		_activeNavigationLinkMobile();
		_activeNavigationLinkDesktop();

		function _markActiveLink() {
			if (
				$(page).attr('data-active-page') ==
				$(this).attr('data-active-link')
			) {
				$(this).addClass(currentClassMobile);
				$(this).addClass(currentClassDesktop);
			}
		}

		function _activeNavigationLinkMobile() {
			anchorLinksMobile.each(_markActiveLink);
		}

		function _activeNavigationLinkDesktop() {
			anchorLinksDesktop.each(_markActiveLink);
		}

		// return
		return {};
	})();
});
