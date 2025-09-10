type SearchParams = {
  q?: string
  category?: string
}

export default function SearchComponent({
  searchParams
}: {
  searchParams: SearchParams
}) {
  const query = searchParams.q || ''
  const category = searchParams.category || 'all'

  return (
    <div>
      <h1>검색 결과</h1>
      <p>쿼리: {query}</p>
      <p>카테고리: {category}</p>
    </div>
  )
}
