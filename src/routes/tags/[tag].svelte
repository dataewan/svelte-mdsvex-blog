<script context="module">
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

<ul>
  {#each tagPosts as post}
    <li><a href={`blog/${post.slug}`}>{post.data.title}</a></li>
  {/each}
</ul>
