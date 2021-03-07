<script>
  import PostDate from "./PostDate.svelte"
  export let post;
</script>


<div>
  <PostDate post={post} />
  <a href={`blog/${post.slug}`}>
    {post.data.title}
  </a>
</div>
