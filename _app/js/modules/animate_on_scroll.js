export default function animateOnScroll() {

	const mainEvents = document.querySelectorAll('.main__events-animate');
	
	window.addEventListener('scroll', animateElements);

	function animateElements() {

		for (const section of mainEvents) {

			const introPosition = section.getBoundingClientRect().top;
			const animationPosition = window.innerHeight / 1.1;
			if (introPosition < animationPosition) {
				section.classList.add('main__animated-section');
			}
			else {
				section.classList.remove('main__animated-section');
			}	
		}
	}
}