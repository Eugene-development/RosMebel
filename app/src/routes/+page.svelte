<script>
	import Hero from '$lib/components/hero/index.svelte';
	import Brands from '$lib/components/brands/index.svelte';
	import Catalog from '$lib/components/catalog/index.svelte';
	import Benefits from '$lib/components/benefits/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Blog from '$lib/components/blog/index.svelte';

	export let data;
</script>

<Hero />
<Brands />
<Catalog />
<Benefits {...data.contentBenefits} />
<Testimonials />
<Blog {...data.contentBlog} />
