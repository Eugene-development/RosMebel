<script>
	/** @type {import('./$types').PageData} */
	import Actions from '$lib/components/actions/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>{import.meta.env.VITE_COMPANY_NAME} | Акции на мебель</title>
	<meta
		name="description"
		content="Акции от мебельной компании {import.meta.env.VITE_COMPANY_NAME}. Время проведения ограничено."
	/>
</svelte:head>

<Actions {...data.contentActions} />
