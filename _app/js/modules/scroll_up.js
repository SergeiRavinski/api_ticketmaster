export default function scrollUp() {
	const buttonUp = document.querySelector('.main__button-scroll-up');
	const buttonGallery = document.querySelector('.header__navigation-gallery')

	window.addEventListener('scroll', handleWindowScroll);
	buttonUp.addEventListener('click', handleButtonArrowUp);

	function handleWindowScroll() {
		if (window.pageYOffset >= window.innerHeight * 0.01) {
			buttonUp.classList.add('main__button-scroll-up--visible');
		}
		else {
			buttonUp.classList.remove('main__button-scroll-up--visible');
		}
	}

	function handleButtonArrowUp() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		})
		buttonGallery.classList.remove('header__navigation-contacts--active');
	}
}