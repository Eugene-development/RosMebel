<script>
	import SEO from '$lib/components/seo/index.svelte';
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import KuhniPatina from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentKuhniPatina} />
<BreadCrumbs {...data.contentKuhniPatina} />
<KuhniPatina {...data.contentKuhniPatina} />
