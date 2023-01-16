// SEO
const title =
	`${import.meta.env.VITE_COMPANY_NAME}` + ' | Кухонные гарнитуры на заказ в Нижнем Новгороде';
const description =
	'Обратите внимание на кухонные гарнитуры на заказ, предлагаемые нашей компанией.';

const SEO = {
	title,
	description
};

// BC
const titleBC = 'Кухонные гарнитуры';
const descriptionBC =
	'Недорогие кухонные гарнитуры на заказ под ваши размеры по доступным ценам. Дизайн проект в подарок. Ждём вас!';
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
		description: 'Кухонные гарнитуры с фасадами из МДФ с покрытием ПВХ плёнкой',
		link: 'kuhni/mdf',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elena.jpeg'
	},
	{
		title: 'Патина',
		description: 'Кухонные гарнитуры с фасадами из МДФ с патинированием фасадов',
		link: 'kuhni/patina',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg'
	},
	{
		title: 'Пластик',
		description: 'Кухонные гарнитуры с фасадами из пластика в профиле или 3d-кромке',
		link: 'kuhni/plastic',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg'
	},
	{
		title: 'Эмаль',
		description: 'Кухонные гарнитуры с эмалированными фасадами разнообразной палитры',
		link: 'kuhni/emal',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/kapuchino.jpeg'
	},
	{
		title: 'Акрил',
		description: 'Варианты кухонных гарнитуров с акриловыми фасадами с высоким глянцем',
		link: 'kuhni/akril',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/scarlet.jpeg'
	},
	{
		title: 'ЛДСП',
		description: 'Модули кухонных гарнитуров эконом класса стандартных размеров и под заказ',
		link: 'kuhni/ldsp',
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
