// // Получаем элемент, который нужно сделать fixed
// const element = document.getElementById('cart');

// // Получаем координаты элемента, до которого нужно доскроллить
// const targetOffset = document.querySelector('.intro__logo').offsetTop;

// // Обработчик прокрутки страницы
// window.addEventListener('scroll', () => {
// 	// Получаем текущую позицию скролла
// 	const scrollPosition =
// 		window.pageYOffset || document.documentElement.scrollTop;

// 	// Проверяем, достигли ли мы элемента, до которого нужно доскроллить
// 	if (scrollPosition >= targetOffset) {
// 		// Добавляем класс "fixed" элементу
// 		element.classList.add('fixed');

// 		// Добавляем класс "visible" элементу с задержкой в 0.5 секунды
// 		setTimeout(() => {
// 			element.classList.add('visible');
// 		}, 500);
// 	} else {
// 		// Удаляем классы "fixed" и "visible" у элемента
// 		element.classList.remove('fixed', 'visible');
// 	}
// });

// // Получаем элемент, который нужно скрыть
// const element = document.getElementById('cart');

// // Получаем координаты элемента, до которого нужно доскроллить
// const targetOffset = document.querySelector('.intro__logo').offsetTop;

// // Обработчик прокрутки страницы
// window.addEventListener('scroll', () => {
// 	// Получаем текущую позицию скролла
// 	const scrollPosition =
// 		window.pageYOffset || document.documentElement.scrollTop;

// 	// Проверяем, достигли ли мы элемента, до которого нужно доскроллить
// 	if (scrollPosition >= targetOffset) {
// 		// Добавляем класс "fixed" элементу
// 		element.classList.add('fixed');
// 	} else {
// 		// Удаляем класс "fixed" элементу
// 		element.classList.remove('fixed');

// 		// Задаем время анимации исчезновения элемента
// 		element.style.transition = 'opacity 0.5s ease-in-out';

// 		// Устанавливаем нулевую прозрачность элемента, чтобы он начал исчезать
// 		element.style.opacity = 0;
// 	}
// });
