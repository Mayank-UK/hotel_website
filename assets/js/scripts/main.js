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

	var disclaimer = (function () {
		// properties
		var togglableClass = 'l-modal--hide';

		// cache DOM
		var modal = $('#j-modal');
		var modalButton = $('#j-modal-button');

		// bind events
		modalButton.click(__toggleModalVisibility);

		function __toggleModalVisibility() {
			modal.addClass(togglableClass);
		}

		// internal methods
		__showModal();

		function __showModal() {
			setTimeout(function () {
				modal.removeClass(togglableClass);
			}, 2000);
		}

		// return
		return {};
	})();

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

	// gallery
	var gallery = (function () {
		// properties

		// cache DOM
		var gallery = $('#gallery');

		// internal methods
		_initGallery();

		function _initGallery() {
			if (gallery.length) {
				gallery.unitegallery();
			}
		}

		// return
		return {};
	})();

	// booking
	var booking = (function () {
		// properties
		var activeLink = 'm-booking-paging__item--active';
		var activeSection = 'l-booking__section--active';

		// cache DOM
		var tabLinks = $('[data-tab-link]');
		var tabSections = $('[data-tab-section]');
		var submitButton = $('#l-booking__review-button');

		// bind events
		tabLinks.on('click', _activeTabPanel);
		submitButton.on('click', _formSubmit);

		function _activeTabPanel() {
			tabLinks.each(function () {
				$(this).removeClass(activeLink);
			});

			tabSections.each(function () {
				$(this).removeClass(activeSection);
			});

			$(this).addClass(activeLink);
			var currentLink = $(this);

			tabSections.each(function () {
				if (
					$(this).attr('data-tab-section') ==
					currentLink.attr('data-tab-link')
				) {
					$(this).addClass(activeSection);
				}
			});
		}

		function _formSubmit(e) {
			e.preventDefault();

			alert('this is a demo form');
		}

		// internal methods

		// return
		return {};
	})();

	var datePicker = (function () {
		// properties

		// cache DOM
		var dateInputField = $('#date');

		// bind events

		// internal methods
		_initDatePicker();

		function _initDatePicker() {
			if (dateInputField.length) {
				dateInputField.dateRangePicker({
					startDate: $(this),
				});
			}
		}

		// return
		return {};
	})();
});
