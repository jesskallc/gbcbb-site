<script context='module'>
	export async function preload({params, query}) {
		if (process.env.NODE_ENV === 'development'){
			return this.fetch(`settings.json`)
			.then(r => r.json())
			.then(results => {
				return {page: results.data.setting};
			});
		}else {
			let results = await this.fetch(`${process.env.API_ENDPOINT}/site/settings`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({endpoint: "https://insitedatasolutions.com/graphql"}),
			})
			.catch(err => {
				console.log(`fetch settings error ${err}`)
			})
			results = await results.json()
			// console.log(results)
			return {page: results.data.setting}
		}
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