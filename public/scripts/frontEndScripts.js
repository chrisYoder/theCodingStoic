// event listeners (view??)

document.getElementById('navBurgerMenu').addEventListener('click', () => {
	let el = document.getElementById('navMenu');
	
	if(el.classList.contains('hidden') === true) {
		el.classList.replace('hidden', 'reveal');
	} 
	
	else {
		el.classList.replace('reveal', 'hidden');
	}
});