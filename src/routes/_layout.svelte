<script context='module'>
	// import client, { getSettings, SITE_SETTINGS } from '../qlClient';
	import {getSettings} from '../qlClient';

	export async function preload({params, query}) {
		let results = await getSettings()
		results = await results.json()
		return {page: results.data.setting}
	}
</script>
<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
	export let page;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
	<title>{page.siteTitle}</title>
</svelte:head>

<Nav {segment}/>

<main>
	<slot></slot>
</main>