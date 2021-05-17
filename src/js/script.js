window.onload = function () {
	document.querySelector('.js-header__burger').onclick = function () {
		const html = document.querySelector('html');
		const body = document.querySelector('body');
		const burger = document.querySelector('.js-header__burger');
		const nav = document.querySelector('.js-header__nav');
		html.classList.toggle('lock');
		body.classList.toggle('lock');
		burger.classList.toggle('active');
		nav.classList.toggle('active');
	};
};
