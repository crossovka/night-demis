// // Получите ID товара из URL-адреса:
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const id = urlParams.get('id');

// // Получаем элементы, в которые будем вставлять данные
// const title = document.querySelector('.title-block__title');
// const price = document.querySelector('.title-block__price');
// const description = document.querySelector('.content__text');
// const sizesImg = document.querySelector('.sizes__img');
// const slider = document.querySelector('.slider');

// // Находим товар в массиве data по его id
// const product = data.find((item) => item.id === Number(id));

// // Вставляем данные в соответствующие элементы
// title.textContent = product.name;
// price.textContent = product.price;
// // description.textContent = 'Описание товара ' + product.name;
// description.textContent = product.description;
// sizesImg.src = product.sizes;
// slider.innerHTML = `
// <div class="slider__item">
// <img src="${product.img}" alt="${product.imgAlt}">
// </div>
//   <div class="slider__item">
//     <img src="${product.img}" alt="${product.imgAlt}">
//   </div>
//   <div class="slider__item">
//   <img src="${product.img}" alt="${product.imgAlt}">
//   </div>
// `;

// const pageTitle = 'Мой заголовок страницы';
// document.title = pageTitle;

const titleBlockTitle = document.querySelector('.title-block__title');
const titleBlockPrice = document.querySelector('.title-block__price');
const contentText = document.querySelector('.content__text');
const sizesImg = document.querySelector('.sizes__img');
const slidersSlider = document.querySelector('.sliders__slider');

function fillProductInfo(id) {
	// Находим объект товара по его ID
	const product = data.find((item) => item.id === id);

	// Заполняем информацию на странице
	titleBlockTitle.textContent = product.name;
	titleBlockPrice.textContent = product.price;
	contentText.textContent = product.description;
	sizesImg.src = product.sizes;

	// Генерируем слайдер
	slidersSlider.innerHTML = '';
	for (const image of product.images) {
		const sliderItem = document.createElement('div');
		sliderItem.classList.add('slider__item');
		sliderItem.innerHTML = `<img src="${image}" alt="фото ${product.name}" class="item__image" />`;
		slidersSlider.appendChild(sliderItem);
	}

	// Инициализируем слайдер
	$('.sliders__slider').slick({
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		lazyLoad: 'ondemand',
		lazyLoadBuffer: 0,
		responsive: [
			{
				// мобилки
				breakpoint: 991.98,
				settings: {
					arrows: false,
					speed: 900,
					autoplaySpeed: 1800,
					easing: true,
				},
			},
		],
	});
}

// Получаем ID товара из параметров запроса URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Заполняем информацию о товаре при загрузке страницы
fillProductInfo(parseInt(productId));

document.title = titleBlockTitle.textContent;
