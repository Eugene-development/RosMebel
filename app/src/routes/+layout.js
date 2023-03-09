import { contentFooter } from '$lib/data/footer/index';
import { contentHeader } from '$lib/data/header/index';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	({ url }) => ({ props: { url } });
	// console.log(url);
	return { contentHeader, contentFooter, url };
}
