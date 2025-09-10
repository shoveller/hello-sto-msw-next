async function UserProfile({ userId }: { userId: number }) {
  const score = await new Promise<number>((resolve) => {
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 1000) + userId * 100
      resolve(randomScore)
    }, 500)
  })

  return (
    <div>
      User {userId}: Score {score}
    </div>
  )
}

async function UserPosts({ userId }: { userId: number }) {
  const numbers = await new Promise<number[]>((resolve) => {
    setTimeout(() => {
      const count = Math.floor(Math.random() * 5) + 3 // 3-7개의 숫자
      const randomNumbers = Array.from(
        { length: count },
        (_, index) => Math.floor(Math.random() * 100) + userId * 10 + index
      )
      resolve(randomNumbers)
    }, 1000)
  })

  return (
    <div>
      {numbers.map((number, index) => (
        <p key={index}>
          Number #{index + 1}: {number}
        </p>
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
