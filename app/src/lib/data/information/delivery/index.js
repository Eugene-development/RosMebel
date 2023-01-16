// SEO
const title = `${import.meta.env.VITE_COMPANY_NAME}` + ' | Доставка';
const description = 'Доставка мебели';

const SEO = {
	title,
	description
};

// Main
const service = 'Доставка';
const text =
	'Привозим мебель своим транспортом до адреса заказчика. Есть платная услуга подъёма на этаж грузчиками. Также вы можете забрать свой заказ самовывозом на своём транспорте или на заказанном грузовом такси.';
const img =
	'https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80';

const content = {
	service,
	text,
	img
};

export const contentDelivery = {
	SEO,
	content
};
