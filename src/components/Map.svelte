<script>
    import fetch from 'node-fetch';

	async function map() {
        const apiEndpoint = process.env.UTIL_API_ENDPOINT;
        return fetch(`${apiEndpoint}/map`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                return res.html
            })
    }

    let promise = map()
</script>

<div>
    <h1>test</h1>
    {#await promise then value}
        {@html value}
    {/await}
</div>
