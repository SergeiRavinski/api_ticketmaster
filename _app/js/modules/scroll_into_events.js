export default function scrollIntoEvents() {
	const buttonGallery = document.querySelector('.header__navigation-gallery')
	const sectionGallery = document.querySelector('.main__events');
	
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

		sectionGallery.scrollIntoView ({
			behavior: "smooth",
		});	
	}
}