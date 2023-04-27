const data = [
	{
		id: 1,
		// указывай путь к картинке в таком формате и относительно 2 странички html
		img: './img/category1/poduct.webp',
		imgAlt: 'Product Image 1',
		name: 'Кепка арсенчика',
		price: '69 ₽',
		description: `ВСЕМ привет я леха и я веду свой канал пэлфи за 5 гривен. Таким образом реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации соответствующий условий активизации. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в формировании дальнейших направлений развития. 
		Задача организации, в особенности же реализация намеченных плановых заданий требуют 
		от нас анализа форм развития.`,
		link: 'https://vk.com/nightdemis?w=product-220079627_8276645',
		sizes: './img/logo.jpg',
		images: [
			'../img/category1/poduct.webp',
			'../img/category1/poduct.webp',
			'../img/category1/poduct.webp',
			'../img/category1/poduct.webp',
			'../img/category1/poduct.webp',
			'../img/category1/poduct.webp',
			'../img/category1/poduct.webp',
			'../img/category1/poduct.webp',
		],
		category: 'category-1', // добавлено новое свойство category
	},
	{
		id: 2,
		img: './img/category2/poduct.webp',
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
		img: './img/category2/poduct.webp',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-2', // добавлено новое свойство category
	},
	{
		id: 4,
		img: './img/category1/poduct.webp',
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
		img: './img/category2/poduct.webp',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-2', // добавлено новое свойство category
	},
	{
		id: 6,
		img: './img/category1/poduct.webp',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-1', // добавлено новое свойство category
	},
	{
		id: 7,
		img: './img/category2/poduct.webp',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-2', // добавлено новое свойство category
	},
	{
		id: 8,
		img: './img/category1/poduct.webp',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 999 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-1', // добавлено новое свойство category
	},
	{
		id: 9,
		img: './img/category1/poduct.webp',
		imgAlt: 'Product Image 1',
		name: 'Штаны семена 666',
		price: '1 99900 ₽',
		description: `ЭЭЭЭЭЭ катах жи есть на рахате эль ме`,
		sizes: './img/logo.jpg',
		images: ['../img/cart.svg', '../img/pdoduct_img.jpg', '../img/logo.jpg'],
		category: 'category-1', // добавлено новое свойство category
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
