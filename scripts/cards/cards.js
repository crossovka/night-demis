// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const id = urlParams.get('id');
// console.log(id); // выводит "2", если URL - "lol.com/login?id=2"

// class Card {
// 	id;
// 	name;
// 	img_prev;
// 	img;
// 	p;

// 	constructor(name, paragraph, img_prev, img, id) {
// 		this.name = name;
// 		this.p = paragraph;
// 		this.img_prev = img_prev;
// 		this.img = img;
// 		this.id = id;
// 	}
// 	generate_html() {
// 		return `<article class="cards__item item">
// 			<a href="./pages/ProductInfo.html?id=${this.id}" class="item__image">
// 				<img src="${this.img}" alt="Товар">
// 			</a>
// 			<div class="item__body item">
// 				<div class="body__name">Кепка дена</div>
// 				<div class="body__price">40.334</div>
// 			</div>
// 		</article>`
// 	}
// }
// function generate_card(id, img, imgAlt, name, price) {
// 	const a = new HTMLElement('article');
// 	console.log(a);
// 	a.innerHTML = `<article class="cards__item item">
// 		<a href="./pages/ProductInfo.html?id=${id}" class="item__image">
// 			<img src="${img}" alt="${imgAlt}">
// 		</a>
// 		<div class="item__body item">
// 			<div class="body__name">${name}</div>
// 			<div class="body__price">${price}</div>
// 		</div>
// 	</article>`;
// 	return a;
// }

// function generate_card(id, img, imgAlt, name, price, category) {
// 	const article = document.createElement('article');
// 	article.className = 'cards__item item';
// 	article.innerHTML = `
// 	  <a href="./pages/ProductInfo.html?id=${id}" data-category="${category}" class="item__image">
// 		<img src="${img}" alt="${imgAlt}">
// 	  </a>
// 	  <div class="item__body item">
// 		<div class="body__name">${name}</div>
// 		<div class="body__price">${price}</div>
// 	  </div>`;
// 	console.log(article);
// 	return article;
// }

// // ВНУТРЕННЯЯ БАЗА ДАННЫХ ПРОЕКТОВ!!!
// class Cards {
// 	_cards;
// 	constructor() {
// 		this._cards = document.getElementsByClassName('content__cards')[0];
// 	}
// 	addCard(id, img, imgAlt, name, price) {
// 		const card = generate_card(id, img, imgAlt, name, price, category);
// 		this._cards.appendChild(card);
// 	}
// }

// const cards = new Cards();

function generate_card(id, img, imgAlt, name, price, category) {
	const article = document.createElement('article');
	article.className = 'cards__item';
	article.dataset.category = category;
	article.innerHTML = `
	  <a href="./pages/ProductInfo.html?id=${id}" target="_blank" class="item__image">
		<img src="${img}" alt="${imgAlt}">
	  </a>
	  <div class="item__body">
		<div class="body__name">${name}</div>
		<div class="body__price">${price}</div>
	  </div>`;
	console.log(article);
	return article;
}

// ВНУТРЕННЯЯ БАЗА ДАННЫХ ПРОЕКТОВ!!!
class Cards {
	_cards;
	constructor() {
		this._cards = document.getElementsByClassName('content__cards')[0];
	}
	addCard(id, img, imgAlt, name, price, category) {
		const card = generate_card(id, img, imgAlt, name, price, category);
		this._cards.appendChild(card);
	}
}

const cards = new Cards();