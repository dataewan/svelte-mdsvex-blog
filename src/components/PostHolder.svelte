<script>
  import PostTitle from "./PostTitle.svelte";
  import PostDate from "./PostDate.svelte";
  import PostTags from "./PostTags.svelte";
  import { stores } from "@sapper/app"

  const posts = __ROUTES__
  const {page} = stores()

  const getSlug = (path) => {
    const split = path.split("/")
    return split[split.length -1 ]
  }

  export let slug 
  export let post 
  $: slug = getSlug($page.path)
  $: post = posts.filter((d) => d.slug === slug)[0]

</script>

<style>
  article {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 100;
  }

  article :global(img) {
    width: 100%;
    object-fit: contain;
  }

  article :global(table) {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    border-spacing: 0;
    overflow-x: auto;
    text-align: left;
    padding-bottom: 2rem;
    margin-left: 2rem;
  }

  article :global(td, th) {
    border-bottom: 0.1rem solid #f0f0f0;
    padding: 0.8rem 0.9rem;
  }

  article :global(blockquote) {
    background: #f0f0f0;
    margin: 1.5rem 10px;
    border-left: 0.2rem solid #ccc;
    padding: 0.5rem 10px;
    font-style: oblique;
  }
</style>

<PostTitle {post} />
<PostDate {post} />
<PostTags {post} />

<article id="article">
  <slot />
</article>
