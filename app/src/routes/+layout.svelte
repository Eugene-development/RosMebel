<script>
	import '../app.css';
	import Banner from '$lib/components/banner/index.svelte';
	import Header from '$lib/components/header/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	import FormMeasurement from '$lib/components/forms/measurement/index.svelte';
	export let data;
</script>

<Banner />
<Header />
<slot />
<Footer {...data.contentFooter} />

<FormMeasurement/>