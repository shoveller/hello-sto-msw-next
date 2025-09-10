async function riskyOperation() {
  if (Math.random() > 0.5) {
    throw new Error('무작위 에러 발생')
  }

  return '성공!'
}

export default async function ErrorHandlingComponent() {
  try {
    const result = await riskyOperation()

    return <div>결과: {result}</div>
  } catch (error) {
    if (error instanceof Error) {
      return <div>에러 발생: {error.message}</div>
    }

    return <div>에러 발생: 알 수 없는 에러</div>
  }
}
