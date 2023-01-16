<script>
	import SEO from '$lib/components/seo/index.svelte';
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import KuhniLDSP from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentKuhniLDSP}/>
<BreadCrumbs {...data.contentKuhniLDSP} />
<KuhniLDSP {...data.contentKuhniLDSP} />
