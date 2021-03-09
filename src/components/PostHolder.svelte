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

  export let slug = getSlug($page.path)
  export let post = posts.filter((d) => d.slug === slug)[0]

</script>

<style>
  article :global(img){
    width: 100%;
  }
</style>

<PostTitle post={post} /> 
<PostDate post={post} />
<PostTags post={post} />

<article>
  <slot>
  </slot>
</article>
