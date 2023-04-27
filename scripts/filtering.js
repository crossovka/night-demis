// =========================================================================================
// ЗАКОМЕНТИРОВАНО, ПОТОМУ ЧТО ПОКА ЧТО ТОЛЬКО 1 КАТГОРИЯ С ФУТБОЛКАМИ
// Получаем все кнопки фильтра и добавляем им обработчик события 'click'
// var filterButtons = document.querySelectorAll('.filter__item');
// for (var i = 0; i < filterButtons.length; i++) {
// 	filterButtons[i].addEventListener('click', onFilterButtonClick);
// }

// // Функция обработчика нажатия на кнопку фильтра
// function onFilterButtonClick(event) {
// 	var filterValue = event.currentTarget.getAttribute('data-filter');
// 	var cards = document.querySelectorAll('.cards__item');
// 	for (var i = 0; i < cards.length; i++) {
// 		var card = cards[i];
// 		var category = card.getAttribute('data-category');
// 		if (filterValue === '*' || category === filterValue) {
// 			card.style.display = '';
// 		} else {
// 			card.style.display = 'none';
// 		}
// 	}
// 	// выделяем активную кнопку фильтра
// 	var activeButton = document.querySelector('.filter__item.active');
// 	if (activeButton) {
// 		activeButton.classList.remove('active');
// 	}
// 	event.currentTarget.classList.add('active');
// }
