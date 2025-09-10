async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  return response.json()
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  return response.json()
}

export default async function ParallelComponent() {
  const [users, posts] = await Promise.all([getUsers(), getPosts()])

  return (
    <div>
      <h1>사용자 수: {users.length}</h1>
      <h1>포스트 수: {posts.length}</h1>
    </div>
  )
}
