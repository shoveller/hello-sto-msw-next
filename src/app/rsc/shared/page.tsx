type Data = {
  timestamp: number
  random: number
}

async function getSharedData() {
  return {
    timestamp: Date.now(),
    random: Math.random()
  }
}

async function ComponentA({ data }: { data: Data }) {
  return <div>컴포넌트 A: {data.timestamp}</div>
}

async function ComponentB({ data }: { data: Data }) {
  return <div>컴포넌트 B: {data.random}</div>
}

export default async function SharedDataComponent() {
  const sharedData = await getSharedData()

  return (
    <div>
      <ComponentA data={sharedData} />
      <ComponentB data={sharedData} />
    </div>
  )
}
