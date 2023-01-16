// SEO
const title = `${import.meta.env.VITE_COMPANY_NAME}` + ' | Акриловые кухонные гарнитуры';
const description = 'Варианты кухонных гарнитуров с акриловыми фасадами в Нижнем Новгороде';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Акриловые кухонные гарнитуры';
const descriptionBC =
	'Ознакомьтесь с нашими вариантами кухонных гарнитуров с глянцевыми акриловыми фасадами';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg';

const parentPage = 'Кухонные гарнитуры';
const parentPageLink = 'kuhni';
const currentPage = 'Акриловые';

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
	titleCategory: 'Угловые',
	descriptionCategory: 'Угловые кухонные гарнитуры'
};

const products = [
	{
		name: 'Скарлет',
		text: '2300х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/scarlet.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Астра',
		text: '2600х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/astra.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Рианна',
		text: '2200/2600х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/riana.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

const content = {
	mainText,
	products
};

export const contentKuhniAkril = {
	SEO,
	BC,
	content
};
