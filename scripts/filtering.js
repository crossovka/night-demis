// 'use strict';

// function imagesInit() {
// 	const images = document.querySelectorAll('.item__image');
// 	if (images.length) {
// 		images.forEach((image) => {
// 			const imageItem = image.querySelector('img');
// 			const padding = (imageItem.offsetHeight / imageItem.offsetWidth) * 100;
// 			image.style.paddingBottom = `${padding}%`;
// 			imageItem.classList.add('init');
// 		});
// 	}
// }

// function gridInit() {
// 	const items = document.querySelector('.content__cards');
// 	const itemGrid = new Isotope(items, {
// 		itemSelector: '.item',
// 		masonry: {
// 			fitWidth: true,
// 			gutter: 20
// 		}
// 	});

// 	document.addEventListener('click', documentActions)

// 	function documentActions(e) {
// 		const targetElement = e.target
// 		if (targetElement.closest('.filter__item')){
// 			const filterItem = targetElement.closest('.filter__item');
// 			const filterValue = filterItem.dataset.filter;
// 			filterItemActive = document.querySelector('.filter__item.active');

// 			filterValue === "*" ? itemGrid.arrange({filter:``}) :
// 				itemGrid.arrange({ filter:`data-filter="${filterValue}"]` })

// 			filterItemActive.classList.remove(".active");
// 			filterItem.classList.add(".active");

// 			e.preventDefault();
// 		}
// 	}
// }

// window.addEventListener('load', windowLoad);

// function windowLoad() {
// 	imagesInit();
// 	gridInit();
// }

const filterItems = document.querySelectorAll('.filter__item');
const cardsItems = document.querySelectorAll('.cards__item');

function filterCardsItems(filter) {
	cardsItems.forEach((item) => {
		if (filter === '*' || item.getAttribute('data-filter') === filter) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}

filterItems.forEach((item) => {
	item.addEventListener('click', () => {
		filterItems.forEach((filter) => {
			filter.classList.remove('active');
		});
		item.classList.add('active');
		filterCardsItems(item.getAttribute('data-filter'));
	});
});
