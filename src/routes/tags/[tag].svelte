<script context="module">
  import PostDescription from "../../components/PostDescription.svelte";
  import posts from "./_tags.js"
  export async function preload({params}){
    const tag = params.tag
    const tagPosts = posts
      .filter(d => d.data.tags)
      .filter(d => d.data.tags.includes(tag))
      .sort((a, b) => a.date < b.date)
    return {tagPosts}
  }
</script>

<script>
  export let tagPosts;
</script>

{#each tagPosts as post}
  <PostDescription post={post} />
{/each}
