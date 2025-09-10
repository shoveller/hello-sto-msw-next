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
      <h1>사용자 수: {users.length}</h1>
      <h1>포스트 수: {posts.length}</h1>
    </div>
  )
}
