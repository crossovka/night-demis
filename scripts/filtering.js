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

// const filterItems = document.querySelectorAll('.filter__item');
// const cardsItems = document.querySelectorAll('.cards__item');

// function filterCardsItems(filter) {
// 	cardsItems.forEach((item) => {
// 		if (filter === '*' || item.getAttribute('data-filter') === filter) {
// 			item.style.display = 'block';
// 		} else {
// 			item.style.display = 'none';
// 		}
// 	});
// }

// filterItems.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		filterItems.forEach((filter) => {
// 			filter.classList.remove('active');
// 		});
// 		item.classList.add('active');
// 		filterCardsItems(item.getAttribute('data-filter'));
// 	});
// });

// =========================================================================================

// // создаем объект Isotope и передаем ему селектор элемента с карточками товаров
// var $grid = $('.content__cards').isotope({
// 	itemSelector: '.cards__item',
// });

// // обрабатываем нажатия на кнопки фильтра
// $('.filter__item').on('click', function () {
// 	var filterValue = $(this).attr('data-filter');
// 	// если нажата кнопка "Все", то показываем все товары
// 	if (filterValue === '*') {
// 		$grid.isotope({ filter: filterValue });
// 	} else {
// 		// иначе показываем товары, у которых data-category совпадает с data-filter кнопки
// 		$grid.isotope({ filter: '[data-category="' + filterValue + '"]' });
// 	}
// 	// выделяем активную кнопку фильтра
// 	$('.filter__item').removeClass('active');
// 	$(this).addClass('active');
// });

// =========================================================================================

// Получаем все кнопки фильтра и добавляем им обработчик события 'click'
var filterButtons = document.querySelectorAll('.filter__item');
for (var i = 0; i < filterButtons.length; i++) {
	filterButtons[i].addEventListener('click', onFilterButtonClick);
}

// Функция обработчика нажатия на кнопку фильтра
function onFilterButtonClick(event) {
	var filterValue = event.currentTarget.getAttribute('data-filter');
	var cards = document.querySelectorAll('.cards__item');
	for (var i = 0; i < cards.length; i++) {
		var card = cards[i];
		var category = card.getAttribute('data-category');
		if (filterValue === '*' || category === filterValue) {
			card.style.display = '';
		} else {
			card.style.display = 'none';
		}
	}
	// выделяем активную кнопку фильтра
	var activeButton = document.querySelector('.filter__item.active');
	if (activeButton) {
		activeButton.classList.remove('active');
	}
	event.currentTarget.classList.add('active');
}
