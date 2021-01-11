<script>
    export let title;
    export let excerpt;
    export let author;
    export let posted_at;
</script>

<h2>{title}</h2>
<h3>{excerpt}</h3>
<h3>by {author.name}</h3>
<h3>Posted {new Date(posted_at).toLocaleString('en',   {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })}</h3>