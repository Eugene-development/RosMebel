// SEO
const title = 'Кухонные гарнитуры из пластика в Нижнем Новгороде';
const description = 'Варианты кухонных гарнитуров с фасадами из пластика в Нижнем Новгороде';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Кухонные гарнитуры - Пластик';
const descriptionBC =
	'Ознакомьтесь с нашими вариантами кухонных гарнитуров с фасадами с покрытием пластиком';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg';

const parentPage = 'Кухонные гарнитуры';
const parentPageLink = 'kuhni';
const currentPage = 'Пластик';

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
	titleCategory: 'Пластик',
	descriptionCategory: 'Кухонные гарнитуры с пластиковыми фасадами'
};

const products = [
	{
		name: 'Аделина',
		text: '2500/3000х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/adelina.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Домино',
		text: '2300х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/domino.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Ясмина',
		text: '1100/3200х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/iasmina.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Марсель',
		text: '2200/1900х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/marsel.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Примула',
		text: '3200х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

const content = {
	mainText,
	products
};

export const contentKuhniPlastic = {
	SEO,
	BC,
	content
};
