export default async function AsyncDataComponent() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(
    (res) => res.json()
  )

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}
