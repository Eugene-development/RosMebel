<script>
	import SEO from '$lib/components/seo/index.svelte';
	import Contacts from '$lib/components/contacts/index.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SEO {...data.contentContacts} />
<Contacts {...data.contentContacts} />
