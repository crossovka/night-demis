// Получите ID товара из URL-адреса:
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// Получаем элементы, в которые будем вставлять данные
const title = document.querySelector('.title-block__title');
const price = document.querySelector('.title-block__price');
const description = document.querySelector('.content__text');
const sizesImg = document.querySelector('.sizes__img');
const slider = document.querySelector('.slider');

// Находим товар в массиве data по его id
const product = data.find((item) => item.id === Number(id));

// Вставляем данные в соответствующие элементы
title.textContent = product.name;
price.textContent = product.price;
description.textContent = 'Описание товара ' + product.name;
sizesImg.src = product.img;
slider.innerHTML = `
  <div class="slider__item">
    <img src="${product.img}" alt="${product.imgAlt}">
  </div>
  <div class="slider__item">
    <img src="${product.img}" alt="${product.imgAlt}">
  </div>
  <div class="slider__item">
    <img src="${product.img}" alt="${product.imgAlt}">
  </div>
`;

