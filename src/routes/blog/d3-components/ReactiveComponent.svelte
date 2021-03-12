<script>
  import {fly} from 'svelte/transition'
  import {max} from "d3-array"
  import {scaleLinear} from "d3"
  export let rawdata

  export let width=500
  export let height=400
  export let margins = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  }

  const parser = (raw) => {
    if (!raw) {
      return []
    }
    const split = raw.split(/\r?\n/)
      .map(d => parseInt(d))
      .filter(d => Number.isInteger(d))
    return split
  }
  
  
  $: dataset = parser(rawdata)
  $: mainWidth = width - margins.left - margins.right
  $: mainHeight = height - margins.top - margins.bottom
  $: xScale = scaleLinear()
    .domain([0, max(dataset)])
    .range([0, mainWidth])

  $: yScale = scaleLinear()
    .domain([0, dataset.length ])
    .range([mainHeight, 0])

</script>


<svg width={width} height={height}>
  <g transform={`translate(${margins.left} ${margins.top})`}>
    {#each dataset as datapoint, i}
      <rect 
        x="0" 
        y={yScale(i)} 
        width="{xScale(datapoint)}" 
        height="10" 
        fill="#00bed1"
        transition:fly="{{x: -100}}"/>
    {/each}
  </g>
</svg>
