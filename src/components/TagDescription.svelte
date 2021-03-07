<script>
  export let tag;

  const describeCount = (tag) => {
    const label = tag[0]
    const count = tag[1]
    if (count === 1){
      return `1 post about ${label}`
    }

    return `${count} posts about ${label}`
  }
</script>


<div>
  <a href={`tags/${tag[0]}`}>{describeCount(tag)}</a>
</div>
