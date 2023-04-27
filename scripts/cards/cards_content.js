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
			'../img/category1/1.webp',
			'../img/category1/2.webp',
		],
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
