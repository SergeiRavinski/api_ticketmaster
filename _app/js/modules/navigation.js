export default function Navigation() {

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

	

	const buttonGallery = document.querySelector('.header__navigation-gallery')
	const sectionGallery = document.querySelector('.main__events');
	const body = document.querySelector('body');

	let scrolledSectionGallery = false;

	buttonGallery.addEventListener('click', handleButtonGallery);

	function handleButtonGallery() {
		visibilityButtonGallery();
		renderHTMLScrollGallery();
	}

	function visibilityButtonGallery() {
		scrolledSectionGallery = !scrolledSectionGallery;
	};

	function renderHTMLScrollGallery() {
		
		if (scrolledSectionGallery === true) {
			sectionGallery.scrollIntoView ({
				behavior: "smooth",
			})
		}
		else {
			body.scrollIntoView ({
				behavior: "smooth",
			})
		}
		
	}
}