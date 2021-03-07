<script>
  export let post
</script>


<style type="text/css" media="screen">
  div#tagheader{
    padding-top: 1rem;
    font-size: 0.75rem;
  }
  
  span#tag{
    margin-left: 0.5rem;
    font-size: 0.5rem
  }

  div#tagcontainer{
    padding-bottom: 1rem;
  }
</style>


{#if post.data.tags}
  <div id="tagheader">
    <h5>More about</h5>
  </div>
  <div id="tagcontainer">
    {#each post.data.tags as tag}
      <span id="tag">
        <img src="/icons/tag.svg" alt="">
        <a href={`tags/${tag}`}>{tag}</a>
      </span>
    {/each}
  </div>
{/if}
