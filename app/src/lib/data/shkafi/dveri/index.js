// SEO
const title =
	`${import.meta.env.VITE_COMPANY_NAME}` + ' | Купить двери купе на заказ в Нижнем Новгороде';
const description = 'Варианты дверей купе для ниш помещений. Разнообразие материалов и цветов.';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Двери купе';
const descriptionBC =
	'Ознакомьтесь с нашими вариантами дверей купе для ниш помещений и межкомнатных перегородок.';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы';
const parentPageLink = 'shkafy';
const currentPage = 'Двери';

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
	titleCategory: 'Двери',
	descriptionCategory: 'Двери купе для перегородок и ниш'
};

const products = [
	{
		name: 'Санди',
		text: '2000х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/sandi.jpeg',
		alt: 'Двери купе'
	},

	{
		name: 'Фикус',
		text: '1800х2200',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/ficus.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Ирис',
		text: '2400х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/iris.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Нарцисс',
		text: '2100х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/narciss.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Мимоза',
		text: '1900х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/shkaffoto-2.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Жасмин',
		text: '3200х2400',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/zhasmin.jpeg',
		alt: 'Двери купе'
	}
];

const content = {
	mainText,
	products
};

export const contentShkafiDveri = {
	SEO,
	BC,
	content
};
