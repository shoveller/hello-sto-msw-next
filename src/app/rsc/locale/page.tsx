export default function LocalizationComponent() {
  const locale = process.env.NEXT_LOCALE || 'ko'
  const messages = {
    ko: '안녕하세요',
    en: 'Hello',
    ja: 'こんにちは'
  }

  return (
    <div>
      <h1>{messages[locale as keyof typeof messages]}</h1>
      <p>현재 로케일: {locale}</p>
    </div>
  )
}
