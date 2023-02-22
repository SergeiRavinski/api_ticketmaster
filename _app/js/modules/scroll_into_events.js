export default function scrollIntoEvents() {

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
			buttonGallery.classList.add('header__navigation-contacts--active');
			
		}
		else {
			body.scrollIntoView ({
				behavior: "smooth",
			})
			buttonGallery.classList.remove('header__navigation-contacts--active');
		}	
	}
}