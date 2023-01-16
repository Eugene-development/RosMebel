// SEO
const title =
	`${import.meta.env.VITE_COMPANY_NAME}` + ' | Купить офисный шкаф на заказ в Нижнем Новгороде';
const description = 'Варианты офисных шкафов для вашей комфортной работы.';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Офисные шкафы';
const descriptionBC =
	'Ознакомьтесь с нашими вариантами офисных шкафов для хранения деловых бумаг и личных вещей.';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы';
const parentPageLink = 'shkafy';
const currentPage = 'Офисные';

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
	titleCategory: 'Офисные',
	descriptionCategory: 'Офисные шкафы для бумаг'
};

const products = [];

const content = {
	mainText,
	products
};

export const contentShkafiOfisnie = {
	SEO,
	BC,
	content
};
