<script>
    export let title;
    export let excerpt;
    export let author;
    export let posted_at;
    export let media;
    export let index = 0;
</script>

<div class="post-preview" id="post-preview-{index}">
    <h2 class="post-title" id="post-title-{index}">{title}</h2>
    <h3 class="post-excerpt" id="post-excerpt-{index}">{excerpt}</h3>
    <h3 class="post-author" id="post-author-{index}">by {author.name}</h3>
    <h3 class="post-postedAt" id="post-postedAt-{index}">Posted {new Date(posted_at).toLocaleString('en',   {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })}</h3>
      {#if (media && media.video_url)}<span class="post-video" id="post-video-{index}"><a href={media.video_url} target="_blank">Watch</a></span>{/if}
      {#if (media && media.audio_url)}<span class="post-audio" id="post-audio-{index}"><a href={media.audio_url} target="_blank">Listen</a></span>{/if}
</div>
