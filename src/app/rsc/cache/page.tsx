async function getCachedData() {
  const response = await fetch('https://api.github.com/repos/vercel/next.js', {
    next: { revalidate: 60 }
  })

  return response.json()
}

export default async function CacheControlComponent() {
  const data = await getCachedData()

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Stars: {data.stargazers_count}</p>
    </div>
  )
}
