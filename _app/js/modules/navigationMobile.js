export default function navigationMobile() {

	let isOpenedNavigationMobile = false;
	const buttonHamburgerMenu = document.querySelector('.header__navigation-mobile');
	const mobileNavigation = document.querySelector('.main__mobile-navigation');

	buttonHamburgerMenu.addEventListener('click', handleButtonHamburgerMenu);

	function visibilityHamburgerMenu() {
		isOpenedNavigationMobile = !isOpenedNavigationMobile;
	}

	function handleButtonHamburgerMenu() {
		visibilityHamburgerMenu();
		renderHTML();
	}

	function renderHTML() {
		if (isOpenedNavigationMobile === true) {
			buttonHamburgerMenu.classList.add('open');
			mobileNavigation.classList.add('main__mobile-navigation--visible')
		}
		else {
			buttonHamburgerMenu.classList.remove('open');
			mobileNavigation.classList.remove('main__mobile-navigation--visible')
		}
	}
}