import {useState, useRef, useCallback} from 'react'
import useBookSearch from './useBookSearch'

const App = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const observer = useRef()
  const lastBookElementRef = useCallback((node) => {
    if (loading) return
    if (observer.current) {
      observer.current.disconnect()
    }
    //observer.current = new IntersectionObserver()
    console.log(node)
  })

  const handleSearch = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const {loading, books, error, hasMore} = useBookSearch(query, pageNumber)
  useBookSearch(query, pageNumber)

  return (
    <>
      <input type='text' value={query} onChange={handleSearch} />
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          )
        } else {
          return <div key={book}>{book}</div>
        }
      })}
      <div>{loading && 'loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
}

export default App
