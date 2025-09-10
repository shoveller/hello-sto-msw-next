async function submitForm(formData: FormData) {
  'use server'

  const _name = formData.get('name') as string
  console.log('서버에서 처리:', _name)
}

export default function FormComponent() {
  return (
    <form action={submitForm}>
      <input name="name" placeholder="이름" required />
      <button type="submit">제출</button>
    </form>
  )
}
