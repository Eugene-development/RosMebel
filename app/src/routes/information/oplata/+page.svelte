<script>
		import { fade } from "svelte/transition";

	import SEO from '$lib/components/seo/index.svelte';
	import Information from '$lib/components/information/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentPayment} />
<Information {...data.contentPayment} />
