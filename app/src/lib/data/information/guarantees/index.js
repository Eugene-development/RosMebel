// SEO
const title = `${import.meta.env.VITE_COMPANY_NAME}` + ' | Гарантии';
const description = 'Гарантии на мебель';

const SEO = {
	title,
	description
};

// Main
const service = 'Гарантии';
const text =
	'Предоставляем гарантии на заказанную вами мебель и на дополнительные услуги на срок от одного года до трёх лет. Гарантии закреплены в договоре.';
const img =
	'https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80';

const content = {
	service,
	text,
	img
};

export const contentGuarantees = {
	SEO,
	content
};
