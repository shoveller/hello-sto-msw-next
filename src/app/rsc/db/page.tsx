const db = {
  users: {
    findMany: async () => [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  }
}

export default async function DatabaseComponent() {
  const users = await db.users.findMany()

  return (
    <div>
      <h1>사용자 목록</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
