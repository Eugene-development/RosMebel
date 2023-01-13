// SEO
const title = 'Кухонные гарнитуры c патинированными фасадами в Нижнем Новгороде';
const description = 'Варианты кухонных гарнитуров с патинированными фасадами в Нижнем Новгороде';

const SEO = {
	title,
	description
};

// BC
const titleBC = 'Кухонные гарнитуры - Патина';
const descriptionBC =
	'Ознакомьтесь с нашими вариантами кухонных гарнитуров с классическими патинированными фасадами';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg';

const parentPage = 'Кухонные гарнитуры';
const parentPageLink = 'kuhni';
const currentPage = 'Патина';

const BC = {
	parentPage,
	parentPageLink,
	currentPage,
	titleBC,
	descriptionBC,
	pathImgBC
};

// Main
const mainText = {
	titleCategory: 'Патина',
	descriptionCategory: 'Кухонные гарнитуры с патинированными фасадами'
};

const products = [
	{
		name: 'Золушка',
		text: '2500х2170х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/zolushka.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Лиза',
		text: '2200х1800х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/liza.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Элина',
		text: '2000/2500х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

const content = {
	mainText,
	products
};

export const contentKuhniPatina = {
	SEO,
	BC,
	content
};
