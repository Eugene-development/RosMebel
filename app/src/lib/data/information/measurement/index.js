// SEO
const title = `${import.meta.env.VITE_COMPANY_NAME}` + ' | Замер';
const description = 'Замер мебели';

const SEO = {
	title,
	description
};

// Main
const service = 'Замер';
const text =
	'Осуществляем обмер помещения с учётом кривизны стен и полов лазерным инструментом. Даём рекомендации исходя из полученных данных и ваших пожеланий для выбора наиболее приемлемого варианта мебели.';
const img =
	'https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80';

const content = {
	service,
	text,
	img
};

export const contentMeasurement = {
	SEO,
	content
};
