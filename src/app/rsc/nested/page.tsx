async function UserProfile({ userId }: { userId: number }) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((res) => res.json())

  return <div>{user.name}</div>
}

async function UserPosts({ userId }: { userId: number }) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  ).then((res) => res.json())

  return (
    <div>
      {posts.map((post: { id: string; title: string }) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}

export default function NestedServerComponent() {
  return (
    <div>
      <UserProfile userId={1} />
      <UserPosts userId={1} />
    </div>
  )
}
