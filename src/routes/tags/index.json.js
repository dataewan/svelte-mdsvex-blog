import posts from "./_tags.js"

const tags = posts.map(d => {
  return d.data.tags
})
  .filter(d => d)
  .flat()
  .reduce((acc, cur) => {
    acc[cur] = acc.hasOwnProperty(cur) ? acc[cur] + 1 : 1;
    return acc
  }, {})


const tagList = Object.entries(tags)
  .sort((a, b) => a[1] < b[1] ? 1 : -1)


export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.write(JSON.stringify(tagList))
  res.end()
}
