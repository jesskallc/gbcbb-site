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
	import BlockText from '../components/BlockText.svelte';
	import PostPreview from '../components/PostPreview.svelte';
import Index from './blog/index.svelte';
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

{#if page.hero}
  <img class="hero" src={page.hero.formats.large.url} alt="" />
{/if}
<h1 class="page-header">{page.header}</h1>
<h2 class="page-sub-header">{page.sub_header || ""}</h2>

{#each page.sections as section, i}
	<div class="info-box" id="info-{i}">
		<h2 class="info-header">{section.header}</h2>
		<h3 class="info-sub-header">{section.sub_header || ""}</h3>
		{#if section.body}
		  <BlockText text={section.body} className="info-text"/>
		{/if}
		{#each section.events as event}
		  {#each event.posts as post}
		    <PostPreview {...post}/>
		  {/each}
		{/each}
	</div>
{/each}
<!--
{#each page.events as section}
  <h2>{section.categories.title}</h2>
  {#each section.categories.posts as post}
	<PostPreview {...post}/>
  {/each}
{/each}
-->