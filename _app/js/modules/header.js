export default function header() {

	let isOpenedNavigationMobile = false;
	let isOpenedWishlist = false;

	const buttonHamburgerMenu = document.querySelector('.header__navigation-mobile');
	const buttonWishlist = document.querySelector('.header__navigation-wishlist');
	const mobileNavigation = document.querySelector('.main__mobile-navigation');
	const wishlist = document.querySelector('.main__wishlist');
	const body = document.querySelector('.main');

	buttonHamburgerMenu.addEventListener('click', handleButtonHamburgerMenu);
	buttonWishlist.addEventListener('click', handleButtonWishlist);
	body.addEventListener('click', handleClickOverBody);
	wishlist.addEventListener('click', handleClickOverWishlist);
	mobileNavigation.addEventListener('click', handleClickOverMobileNavigation);
	window.addEventListener('keydown', handleKeyDown);

	function handleKeyDown(event) {
		if(event.keyCode === 27) {
			(isOpenedWishlist = false);
			wishlist.classList.remove('main__wishlist--visible');
		}
	}

	function visibilityHamburgerMenu() {
		isOpenedNavigationMobile = !isOpenedNavigationMobile;
	}

	function visibilityWishlist() {
		isOpenedWishlist = !isOpenedWishlist;
	}

	function handleButtonHamburgerMenu() {
		visibilityHamburgerMenu();
		renderHTMLMenu();
	}

	function handleButtonWishlist() {
		visibilityWishlist();
		renderHTMLWishlist();
	}

	function handleClickOverBody(event) {
		event.stopPropagation();
		renderHTMLCloseMenus();
	}

	function handleClickOverWishlist(event) {
		event.stopPropagation();
	}

	function handleClickOverMobileNavigation(event) {
		event.stopPropagation();
	}

	function renderHTMLMenu() {
		if (isOpenedNavigationMobile === true) {
			(isOpenedWishlist = false);
			buttonHamburgerMenu.classList.add('open');
			mobileNavigation.classList.add('main__mobile-navigation--visible')
			wishlist.classList.remove('main__wishlist--visible');
			buttonWishlist.classList.remove('header__navigation-wishlist--active');
		}
		else {
			buttonHamburgerMenu.classList.remove('open');
			mobileNavigation.classList.remove('main__mobile-navigation--visible')
		}
	}

	function renderHTMLWishlist() {
		if (isOpenedWishlist === true) {
			(isOpenedNavigationMobile = false);
			wishlist.classList.add('main__wishlist--visible');
			buttonWishlist.classList.add('header__navigation-wishlist--active');
			buttonHamburgerMenu.classList.remove('open');
			mobileNavigation.classList.remove('main__mobile-navigation--visible')
		}
		else {
			wishlist.classList.remove('main__wishlist--visible');
			buttonWishlist.classList.remove('header__navigation-wishlist--active');
		}
	}

	function renderHTMLCloseMenus() {
		buttonHamburgerMenu.classList.remove('open');
		mobileNavigation.classList.remove('main__mobile-navigation--visible')
		wishlist.classList.remove('main__wishlist--visible');
		buttonWishlist.classList.remove('header__navigation-wishlist--active');
		(isOpenedWishlist = false);
		(isOpenedNavigationMobile = false);
	}
}