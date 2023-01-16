<script>
	import SEO from '$lib/components/seo/index.svelte';
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import KuhniAkril from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentKuhniAkril} />
<BreadCrumbs {...data.contentKuhniAkril} />
<KuhniAkril {...data.contentKuhniAkril} />
