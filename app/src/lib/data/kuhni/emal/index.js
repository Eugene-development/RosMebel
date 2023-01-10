// SEO
const title = 'Эмалированные кухонные гарнитуры в Нижнем Новгороде';
const description = 'Варианты эмалированных кухонных гарнитуров в Нижнем Новгороде';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Кухонные гарнитуры - Эмаль';
const descriptionBC = 'Ознакомьтесь с нашими вариантами эмалированных кухонных гарнитуров';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg';

const parentPage = 'Кухонные гарнитуры';
const parentPageLink = 'kuhni';
const currentPage = 'Эмаль';

const BC = {
	parentPage,
	parentPageLink,
	currentPage,
	titleBC,
	descriptionBC,
	pathImgBC
};

//Main
const mainText = {
	titleCategory: 'Эмалированные',
	descriptionCategory: 'Эмалированные кухонные гарнитуры'
};

const products = [
	{
		name: 'Капучино',
		text: '2800/1800х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/kapuchino.jpeg',
		alt: ''
	},
	{
		name: 'Прага',
		text: '2000/3000х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/praga.jpeg',
		alt: ''
	}
];

const content = {
	mainText,
	products
};

export const contentKuhniEmal = {
	BC,
	content
};
