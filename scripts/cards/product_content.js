const titleBlockTitle = document.querySelector('.title-block__title');
const titleBlockPrice = document.querySelector('.title-block__price');

// const contentText = document.querySelector('.content__text');
const contentTextOne = document.getElementById('one')
const contentTextTwo = document.getElementById('two')
const contentTextThree = document.getElementById('three')

const sizesImg = document.querySelector('.sizes__img');
const slidersSlider = document.querySelector('.sliders__slider');

const buttonLink = document.querySelector('.button__btn');

function fillProductInfo(id) {
	// Находим объект товара по его ID
	const product = data.find((item) => item.id === id);

	// Заполняем информацию на странице
	titleBlockTitle.textContent = product.name;
	titleBlockPrice.textContent = product.price;

	contentTextOne.textContent = product.descriptionOne;
	contentTextTwo.textContent = product.descriptionTwo;
	contentTextThree.textContent = product.descriptionThree;

	sizesImg.src = product.sizes;

	// Добавляем ссылку на кнопку
	buttonLink.setAttribute('href', product.link);

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
		lazyLoad: 'ondemand',
		lazyLoadBuffer: 0,
		adaptiveHeight: true,
		responsive: [
			{
				// мобилки
				breakpoint: 991.98,
				settings: {
					arrows: false,
					adaptiveHeight: true,
					// speed: 900,
					// autoplaySpeed: 1800,
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
