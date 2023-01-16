// SEO
const title =
	`${import.meta.env.VITE_COMPANY_NAME}` + ' | Купить гардеробную на заказ в Нижнем Новгороде';
const description = 'Варианты гардеробных для ниш в комнатах.';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Гардеробные';
const descriptionBC =
	'Ознакомьтесь с нашими вариантами гардеробных различного наполнения для верхней одежды и повседневной.';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы';
const parentPageLink = 'shkafy';
const currentPage = 'Гардеробные';

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
	titleCategory: 'Гардеробные',
	descriptionCategory: 'Вместительные гардеробные'
};

const products = [];

const content = {
	mainText,
	products
};

export const contentShkafiGarderobnie = {
	SEO,
	BC,
	content
};
