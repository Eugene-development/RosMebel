import { contentBenefits } from '$lib/data/benefits';
import { contentCooperation } from '$lib/data/cooperation';
import { contentBlog } from '$lib/data/blog';

/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	return { contentBenefits, contentCooperation, contentBlog };
}
