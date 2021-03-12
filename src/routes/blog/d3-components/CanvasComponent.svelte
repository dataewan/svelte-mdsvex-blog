
<script>
  // original comes from here, I've just svelted it.
  // https://observablehq.com/@d3/collision-detection/2
  import {onMount} from "svelte";
  import {select, pointer, forceX, forceY, forceCollide, forceSimulation, forceManyBody, randomUniform, scaleOrdinal, range, schemeSet1} from "d3";
  export let numNodes
  let canvas
  let width = 500
  let height = 500

  const n = 9

  const k = width / 200;
  const r = randomUniform(k, k*4)

  const data = Array.from({length: numNodes}, (_, i) => ({r: r(), group: i && (i % n + 1)}));

  const color = scaleOrdinal(range(n), ["transparent"].concat(schemeSet1))
  
  onMount(() => {
    const context = canvas.getContext('2d');
    let nodes = data.map(Object.create);

    const simulation = forceSimulation(nodes)
      .alphaTarget(0.3)
      .velocityDecay(0.1)
      .force("x", forceX().strength(0.01))
      .force("y", forceY().strength(0.01))
      .force("collide", forceCollide().radius(d => d.r + 1).iterations(3))
      .force("charge", forceManyBody().strength((d, i) => i ? 0 : -width * 2 / 3))
      .on("tick", ticked);

    select(context.canvas)
      .on("touchmove", event => event.preventDefault())
      .on("pointermove", pointed)

    // invaidation.then(() => simulation.stop())

    function pointed(event){
      const [x, y] = pointer(event)
      nodes[0].fx = x - width / 2
      nodes[0].fy = y - height / 2;
    }

    function ticked() {
      context.clearRect(0, 0, width, height);
      context.save()
      context.translate(width / 2, height / 2)

      for (const d of nodes) {
        context.beginPath()
        context.moveTo(d.x + d.r, d.y)
        context.arc(d.x, d.y, d.r, 0, 2 * Math.PI)
        context.fillStyle = color(d.group);
        context.fill()
      }
      context.restore();
    }
  })
</script>


<style>

canvas {
  background-color: #ddd;
}

</style>

<canvas
  bind:this={canvas}
  width={width}
  height={height}
></canvas>
