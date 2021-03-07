<script context="module">
  export function preload({params, query}){
    return this.fetch(`tags.json`).then(r => r.json()).then(tags => {
      return {tags}
    })
  }
</script>

<script>
  export let tags
</script>

<ul>
  {#each tags as tag}
    <li><a href="tags/{tag[0]}">{tag[1]} - {tag[0]}</a></li>
  {/each}
</ul>
