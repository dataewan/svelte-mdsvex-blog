<script context="module">
  import TagDescription from "../../components/TagDescription.svelte";
  export function preload({params, query}){
    return this.fetch(`tags.json`).then(r => r.json()).then(tags => {
      return {tags}
    })
  }
</script>

<script>
  export let tags
</script>

<h1>Tags</h1>

{#each tags as tag}
  <TagDescription tag={tag} />
{/each}
