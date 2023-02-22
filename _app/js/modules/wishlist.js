export default function wishlist() {

	let isOpenedWishlist = false;
	const buttonWishlist = document.querySelector('.header__navigation-wishlist');
	const wishlist = document.querySelector('.main__wishlist');

	buttonWishlist.addEventListener('click', handleButtonWishlist);

	function visibilityWishlist() {
		isOpenedWishlist = !isOpenedWishlist;
	}

	function handleButtonWishlist() {
		visibilityWishlist();
		renderHTML();
	}

	function renderHTML() {
		if (isOpenedWishlist === true) {
			wishlist.classList.add('main__wishlist--visible');
			buttonWishlist.classList.add('header__navigation-wishlist--active');
		}
		else {
			wishlist.classList.remove('main__wishlist--visible');
			buttonWishlist.classList.remove('header__navigation-wishlist--active');
		}
	}
}