// const data = [
// 	{
// 		id: 1,
// 		img: './img/pdoduct_img.jpg',
// 		imgAlt: 'Product Image 1',
// 		name: 'Product 1',
// 		price: '10.99',
// 		description:
// 			'This is product 1. It is a great product that will meet all of your needs and exceed all of your expectations.',
// 		sizes: './img/pdoduct_img.jpg',
// 		images: [
// 			'./img/product_img1.jpg',
// 			'./img/product_img1_1.jpg',
// 			'./img/product_img1_2.jpg',
// 		],
// 		category: 'category1', // добавляем значение category
// 	},
// 	{
// 		id: 2,
// 		img: './img/pdoduct_img.jpg',
// 		imgAlt: 'Product Image 2',
// 		name: 'Product 2',
// 		price: '20.99',
// 		description:
// 			'This is product 2. It is an even better product than product 1. It will exceed all of your expectations and then some.',
// 		sizes: '../img/pdoduct_img.jpg',
// 		images: [
// 			'./img/product_img2.jpg',
// 			'./img/product_img2_1.jpg',
// 			'./img/product_img2_2.jpg',
// 		],
// 		category: 'category2', // добавляем значение category
// 	},
// 	{
// 		id: 3,
// 		img: './img/pdoduct_img.jpg',
// 		imgAlt: 'Product Image 3',
// 		name: 'Product 3',
// 		price: '30.99',
// 		description:
// 			'This is product 3. It is the best product we have ever made. It will blow your mind and change your life forever.',
// 		sizes: ['Small', 'Large', 'X-Large'],
// 		images: [
// 			'./img/product_img3.jpg',
// 			'./img/product_img3_1.jpg',
// 			'./img/product_img3_2.jpg',
// 			'./img/product_img3_3.jpg',
// 		],
// 		category: 'category3', // добавляем значение category
// 	},
// ];

const data = [
	{
		id: 1,
		// указывай путь к картинке в таком формате и относительно 2 странички html
		img: './img/pdoduct_img.jpg',
		imgAlt: 'Product Image 1',
		name: 'Кепка арсенчика',
		price: '69 4:20 ₽',
		description: `ВСЕМ привет я леха и я веду свой канал пэлфи за 5 гривен. Таким образом реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации соответствующий условий активизации. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании дальнейших направлений развития. 
		Задача организации, в особенности же реализация намеченных плановых заданий требуют 
		от нас анализа форм развития.`,
		sizes: './img/logo.jpg',
		images: [
			'../img/pdoduct_img.jpg',
			'../img/logo.jpg',
			'../img/cart.svg'],
		category: 'category-1', // добавлено новое свойство category
	},
	{
		id: 2,
		img: './img/cart.svg',
		imgAlt: 'Product Image 1',
		name: 'Трусы казаха',
		price: '999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-2', // добавлено новое свойство category
	},
	{
		id: 3,
		img: './img/intro.png',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-3', // добавлено новое свойство category
	},
	{
		id: 4,
		img: './img/close.png',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-1', // добавлено новое свойство category
	},
	{
		id: 5,
		img: './img/prod.PNG',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-2', // добавлено новое свойство category
	},
];

for (const item of data) {
	console.log(item);
	cards.addCard(
		item.id,
		item.img,
		item.imgAlt,
		item.name,
		item.price,
		item.category
	);
}
