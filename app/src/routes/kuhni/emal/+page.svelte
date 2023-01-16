<script>
	import SEO from '$lib/components/seo/index.svelte';
	import BreadCrumbs from '$lib/components/bread-crumbs/index.svelte';
	import KuhniEmal from '$lib/components/category/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentKuhniEmal}/>
<BreadCrumbs {...data.contentKuhniEmal} />
<KuhniEmal {...data.contentKuhniEmal} />
