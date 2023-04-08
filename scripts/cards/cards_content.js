// const data = [
// 	{
// 		id: 1,
// 		img: './img/pdoduct_img.jpg',
// 		imgAlt: 'Image 1',
// 		name: 'Product 1',
// 		price: '10.99',
// 	},
// 	{
// 		id: 2,
// 		img: './img/pdoduct_img.jpg',
// 		imgAlt: 'Image 2',
// 		name: 'Product 2',
// 		price: '20.99',
// 	},
// 	{
// 		id: 3,
// 		img: './img/pdoduct_img.jpg',
// 		imgAlt: 'Image 3',
// 		name: 'Product 3',
// 		price: '30.99',
// 	},
// ];

const data = [
	{
		id: 1,
		img: './img/pdoduct_img.jpg',
		imgAlt: 'Product Image 1',
		name: 'Product 1',
		price: '10.99',
		description:
			'This is product 1. It is a great product that will meet all of your needs and exceed all of your expectations.',
		sizes: './img/pdoduct_img.jpg',
		images: [
			'./img/product_img1.jpg',
			'./img/product_img1_1.jpg',
			'./img/product_img1_2.jpg',
		],
	},
	{
		id: 2,
		img: './img/pdoduct_img.jpg',
		imgAlt: 'Product Image 2',
		name: 'Product 2',
		price: '20.99',
		description:
			'This is product 2. It is an even better product than product 1. It will exceed all of your expectations and then some.',
		sizes: '../img/pdoduct_img.jpg',
		images: [
			'./img/product_img2.jpg',
			'./img/product_img2_1.jpg',
			'./img/product_img2_2.jpg',
		],
	},
	{
		id: 3,
		img: './img/pdoduct_img.jpg',
		imgAlt: 'Product Image 3',
		name: 'Product 3',
		price: '30.99',
		description:
			'This is product 3. It is the best product we have ever made. It will blow your mind and change your life forever.',
		sizes: ['Small', 'Large', 'X-Large'],
		images: [
			'./img/product_img3.jpg',
			'./img/product_img3_1.jpg',
			'./img/product_img3_2.jpg',
			'./img/product_img3_3.jpg',
		],
	},
];

for (const item of data) {
	console.log(item);
	cards.addCard(item.id, item.img, item.imgAlt, item.name, item.price);
}
