<script>
  export let post;
</script>

<style>
  time {
    font-size: 0.5rem;
  }
</style>

<img src="/icons/clock.svg" alt=""/>
<time datetime={post.date}> {post.date.substring(0, 10)} </time>
