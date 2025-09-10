import { delay } from 'msw'

async function getUsers() {
  await delay(100)

  return [1, 2]
}

async function getPosts() {
  await delay(100)

  return [1, 2, 3]
}

export default async function ParallelComponent() {
  const [users, posts] = await Promise.all([getUsers(), getPosts()])

  return (
    <div>
      <h1>User count: {users.length}</h1>
      <h1>Post count: {posts.length}</h1>
    </div>
  )
}
