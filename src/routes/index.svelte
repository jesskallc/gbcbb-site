<script context='module'>
	export async function preload({params, query}) {
		if (process.env.NODE_ENV === 'development'){
			return this.fetch(`index.json`)
			.then(r => r.json())
			.then(results => {
				return {page: results.data.frontPage};
			});
		}else{
			let results = await this.fetch(`${process.env.API_ENDPOINT}/site/frontpage`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({endpoint: "https://insitedatasolutions.com/graphql"}),
			})
			.catch(err => {
				console.log(`fetch frontpage error ${err}`)
			})
			results = await results.json()
			console.log(results.data.frontPage)
			return {page: results.data.frontPage}
		}
	}
</script>
<script>
    import HeroSection from '../components/HeroSection.svelte';
import PageHeader from '../components/PageHeader.svelte';
import PageSection from '../components/PageSection.svelte';
	export let page;
</script>

<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	img {
		width: 100%;
		/* max-width: 400px;
		margin: 0 0 1em 0; */
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

{#if page.hero}<HeroSection hero={page.hero}/>{/if}
<PageHeader header={page.header} sub_header={page.sub_header}/>
{#each page.sections as section, i}
	<PageSection {...section} index={i}/>
{/each}
