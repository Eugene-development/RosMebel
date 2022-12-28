// SEO
const title = 'Кухонные гарнитуры в Нижнем Новгороде';
const description = 'Кухонные гарнитуры на заказ в Нижнем Новгороде';

const SEO = {
	title,
	description
};

// BC
const titleBC = 'Кухонные гарнитуры';
const descriptionBC = 'Кухонные гарнитуры на заказ под ваши размеры. Дизайн проект в подарок.';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg';

const currentPage = 'Кухонные гарнитуры';
const parentPage = '';
const parentPageLink = '';

const BC = {
	currentPage,
	parentPage,
	parentPageLink,
	titleBC,
	descriptionBC,
	pathImgBC
};

// Main
const mainText = {
	h1: 'Кухонные гарнитуры на заказ',
	title: 'Кухонные гарнитуры на заказ и по стандартным модулям',
	description:
		'Недорогие кухонные гарнитуры по низким ценам. Выбирайте наиболее подходящий под ваши нужды вариант. Услуги замерщика бесплатно. Осуществляем доставку, подъём и установку.'
};

const img = [
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/milena.jpeg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/astra.jpeg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/maria.jpeg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/beluchi.jpeg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/evelina.jpeg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg',
		alt: ''
	}
];

const types = [
	{
		title: 'МДФ',
		description: 'Кухонные гарнитуры с фасадами из МДФ с покрытием ПВХ',
		link: 'kuhni/mdf',
		img: ''
	},
	{
		title: 'Патина',
		description: 'Кухонные гарнитуры с фасадами из МДФ с патинированием',
		link: 'kuhni/mdf',
		img: ''
	},
	{
		title: 'Пластик',
		description: 'Кухонные гарнитуры с фасадами из пластика в профиле',
		link: 'kuhni/plastic',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg'
	},
	{
		title: 'Эмаль',
		description: 'Варианты кухонных гарнитуров по низким ценам',
		link: 'kuhni/econom',
		img: ''
	},
	{
		title: 'ЛДСП',
		description: 'Модули кухонных гарнитуров стандартных размеров',
		link: 'kuhni/modulnie',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/milena.jpeg'
	}
];

const content = {
	mainText,
	img,
	types
};

export const contentKuhni = {
	SEO,
	BC,
	content
};
