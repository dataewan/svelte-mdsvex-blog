<script>
  export let count = 0;
</script>


<span>
  <button on:click="{() => count = count -1 }">-</button>
  {count}
  <button on:click="{() => count = count +1 }">+</button>
</span>
