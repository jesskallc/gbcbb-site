<script>
	import { onMount } from 'svelte';
	import marked from 'marked';
	export let text;
	export let text_cleaned = "";
	export let className = "";
	export let _marked = marked;

	async function sanitizeHtml(text){
		if(process.env.NODE_ENV === 'development'){
			return text
		}else{
			const endpoint = `${process.env.UTIL_API_ENDPOINT}/sanitize`
			const request = {
					body: JSON.stringify({
						text: text
					}),
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
			}
			return fetch(endpoint, request)
			.then(res => res.json())
			.then(res => {
				return res.clean
			})
			.catch(err => {
				console.log(err)
			})
		}
	}

	onMount(async () => {
		text_cleaned = await sanitizeHtml(_marked(text))
	});
</script>

<div class={className}>
	<slot>{@html text_cleaned}</slot>
</div>