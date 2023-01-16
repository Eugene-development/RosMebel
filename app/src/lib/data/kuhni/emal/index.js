// SEO
const title = `${import.meta.env.VITE_COMPANY_NAME}` + ' | Эмалированные кухонные гарнитуры';
const description = 'Варианты эмалированных кухонных гарнитуров в Нижнем Новгороде';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Кухонные гарнитуры - Эмаль';
const descriptionBC =
	'Ознакомьтесь с нашими вариантами кухонных гарнитуров с эмалированными фасадами различного цвета.';
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
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Прага',
		text: '2000/3000х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/praga.jpeg',
		alt: 'Кухонный гарнитур'
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
