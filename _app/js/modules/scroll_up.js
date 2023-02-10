export default function Scroll_up() {

	const buttonUp = document.querySelector('.main__button-scroll-up');

	window.addEventListener('scroll', handleWindowScroll);
	buttonUp.addEventListener('click', handleButtonArrowUp);

	function handleWindowScroll() {

		if (window.pageYOffset >= window.innerHeight * 2) {
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
	}
}