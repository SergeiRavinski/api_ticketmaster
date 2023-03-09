export default function scrollIntoEvents() {

	let scrolledSectionGallery = false;
	const buttonGallery = document.querySelector('.header__navigation-gallery')
	const sectionGallery = document.querySelector('.main__events');

	buttonGallery.addEventListener('click', handleButtonGallery);

	function handleButtonGallery() {
		visibilityButtonGallery();
		renderHTMLScrollGallery();
	}

	function visibilityButtonGallery() {
		scrolledSectionGallery = !scrolledSectionGallery;
	};

	function renderHTMLScrollGallery() {

		sectionGallery.scrollIntoView ({
			behavior: "smooth",
		});	
	}
}