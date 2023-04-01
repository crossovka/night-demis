// $(document).ready(function () {
// 	var element = $('.cart');
// 	var height_el = element.offset(10).top;

// 	$('.menu__link--cart').css({
// 		width: element.outerWidth(),
// 		height: element.outerHeight(),
// 	});

// 	$(window).scroll(function () {
// 		if ($(window).scrollTop() > height_el) {
// 			element.addClass('fixed');
// 		} else {
// 			element.removeClass('fixed');
// 		}
// 	});

// });
window.addEventListener('scroll', function () {
	var cart = document.querySelector('.menu__cart');
	var menu = document.querySelector('.menu__list');
	var lastLink = menu.querySelector('.menu__link:last-child');

	var cartOffset = lastLink.offsetTop + lastLink.offsetHeight + 10;
	if (window.pageYOffset > cartOffset) {
		cart.style.top = window.pageYOffset - cartOffset + 'px';
	} else {
		cart.style.top = '50px';
	}
});
