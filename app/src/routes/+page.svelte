<script>
	import Hero from '$lib/components/hero/index.svelte';
	import Brands from '$lib/components/brands/index.svelte';
	import Preview from '$lib/components/preview/index.svelte';
	import Benefits from '$lib/components/benefits/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Blog from '$lib/components/blog/index.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.companyName} | Мебель на заказ</title>
	<meta
		name="description"
		content="Мебель на заказ для вашей квартиры, дома или офиса от компании {data.companyName}. Заказывайте бесплатный обмер на нашем сайте."
	/>
</svelte:head>

<Hero />
<Brands />
<Preview />
<Benefits {...data.contentBenefits} />
<Testimonials />
<Blog {...data.contentBlog} />
