<script>
  import PostPreview from "./PostPreview.svelte";
  import BlockText from "./BlockText.svelte";

  export let header;
  export let sub_header;
  export let body;
  export let events = [];
  export let index = 0;
</script>

<div class="page-section" id="page-section-{index}">
    <h2 class="section-header">{header}</h2>
    <h3 class="section-sub-header">{sub_header || ""}</h3>
    {#if body}
      <BlockText text={body} className="section-body"/>
    {/if}
    {#each events as event}
      {#each event.posts as post, i}
        <PostPreview {...post} index={`${index}.${i}`}/>
      {/each}
    {/each}
</div>
