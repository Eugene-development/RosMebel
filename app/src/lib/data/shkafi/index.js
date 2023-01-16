// SEO
const title = `${import.meta.env.VITE_COMPANY_NAME}` + ' | Шкафы на заказ в Нижнем Новгороде';
const description = 'Обратите внимание на шкафы на заказ, предлагаемые нашей компанией.';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Шкафы';
const descriptionBC =
	'Функциональные шкафы на заказ для вашей комнаты или гардероба. Множество форм и материалов. Дизайн проект в подарок. Звоните!';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const currentPage = 'Шкафы';
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

//Main
const mainText = {
	h1: 'Гардеробы и шкафы на заказ',
	title: 'Распашные шкафы и шкафы купе',
	description:
		'Рассмотрите недорогие шкафы по низким ценам, а также распашные и встроенные шкафы. Выполним заказ под ваш размер в комнату или прихожую. Предложим варианты сочетания материалов и цветов в зависимости от ваших пожеланий и ценовой политики.'
};

const img = [
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/9.JPG',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/3.jpg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/6.jpg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg',
		alt: ''
	}
];

const types = [
	{
		title: 'Шкафы купе',
		description: 'Шкафы купе с подвесной или нижнеопорной системой высокого качества',
		link: 'shkafy/kupe',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg'
	},
	{
		title: 'Распашные шкафы',
		description: 'Пеналы и двух, трёх и четырёх створчатые шкафы с выдвижными ящиками',
		link: 'shkafy/raspashnie',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/halcedon.jpeg'
	},
	{
		title: 'Встроенные шкафы',
		description: 'Безкаркасные шкафы встроенные в нишу с полками, ящиками и специальной фурнитурой',
		link: 'shkafy/vstroenie',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg'
	},
	{
		title: 'Гардеробные',
		description: 'Полнофункциональные гардеробные с любым наполнением и под любой размер',
		link: 'shkafy/garderobnie',
		img: 'https://мебель-по-цене-фабрики.рф/thumb/2/yoya_PxK9Ckv3eGUUTy1Pg/r/d/mebel_dlya_garderobnoy_komnaty_syuzen.jpg'
	},
	{
		title: 'Двери купе',
		description: 'Двери купе в качестве перегородок или для закрытия ниш и гардеробных комнат',
		link: 'shkafy/dveri',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/zhasmin.jpeg'
	},
	{
		title: 'Офисные шкафы',
		description: 'Стильные и строгие варианты шкафов для офисных помещений или для вашего дома',
		link: 'shkafy/ofisnie',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg'
	}
];

const content = {
	mainText,
	img,
	types
};

export const contentShkafi = {
	SEO,
	BC,
	content
};
