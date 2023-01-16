// SEO
const title =
	`${import.meta.env.VITE_COMPANY_NAME}` + ' | Купить встроенный шкаф на заказ в Нижнем Новгороде';
const description = 'Варианты встроенных шкафов для ниш помещений в вашей квартире.';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Встроенные шкафы';
const descriptionBC =
	'Ознакомьтесь с нашими вариантами встроенных шкафов для ниш различных назначений от гардеробной до кладовой.';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы';
const parentPageLink = 'shkafy';
const currentPage = 'Встроенные';

const BC = {
	parentPage,
	parentPageLink,
	currentPage,
	titleBC,
	descriptionBC,
	pathImgBC
};

const mainText = {
	titleCategory: 'Встроенные',
	descriptionCategory: 'Встроенные шкафы-купе'
};

const products = [
	{
		name: 'Челси',
		text: '2800х2300х500',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/chelsi.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Фикус',
		text: '1800х2200',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/ficus.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Ирис',
		text: '2400х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/iris.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Люкс-10',
		text: '2900х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/luks-10.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Люкс-3',
		text: '2300х2450х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/luks-3.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Мимоза',
		text: '3000х2200х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/mimosa.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Нарцисс',
		text: '2100х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/narciss.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Мимоза',
		text: '1900х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/shkaffoto-2.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Юнона',
		text: '2600х2400х550',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/unona.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Жасмин',
		text: '3200х2400',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/zhasmin.jpeg',
		alt: 'Встроенный шкаф'
	}
];

const content = {
	mainText,
	products
};

export const contentShkafiVstroenie = {
	SEO,
	BC,
	content
};
