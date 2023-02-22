export default function navigationMobile() {

	let isOpenedButton = false;
	const buttonHamburgerMenu = document.querySelector('.header__navigation-mobile');

	buttonHamburgerMenu.addEventListener('click', handleButtonHamburgerMenu);

	function visibilityHamburgerMenu() {
		isOpenedButton = !isOpenedButton;
	}

	function handleButtonHamburgerMenu() {
		visibilityHamburgerMenu();
		renderHTML();
	}

	function renderHTML() {
		if (isOpenedButton === true) {
			buttonHamburgerMenu.classList.add('open');
		}
		else {
			buttonHamburgerMenu.classList.remove('open');
		}
	}
}