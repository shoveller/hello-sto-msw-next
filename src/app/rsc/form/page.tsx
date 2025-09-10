async function submitForm(formData: FormData) {
  'use server'

  const _name = formData.get('name') as string
  console.log('Processed on server:', _name)
}

export default function FormComponent() {
  return (
    <form action={submitForm}>
      <input name="name" placeholder="Name" required />
      <button type="submit">Submit</button>
    </form>
  )
}
