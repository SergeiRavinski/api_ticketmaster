export default function animateOnScroll() {

	const text = document.querySelector('.main__text .main__text-paragraph');
	
	window.addEventListener('scroll', animateElements);

	function animateElements() {

		const introPosition = text.getBoundingClientRect().top;
		const animationPosition = window.innerHeight / 1.3;

		if (introPosition < animationPosition) {
			text.classList.add('main__text-animated');
		}
		else {
			text.classList.remove('main__text-animated');
		}
	}
}