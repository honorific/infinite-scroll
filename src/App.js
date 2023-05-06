import {useState} from 'react'
import useBookSearch from './useBookSearch'

const App = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const handleSearch = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
    setPageNumber(1)
  }


  const {loading, books, error, hasMore} = useBookSearch(query, pageNumber)
  console.log('books are', books)
  useBookSearch(query, pageNumber)

  return (
    <>
      <input type='text' onChange={handleSearch} />
      {books.map((book) => {
        return <div key={book}>{book}</div>
      })}
      <div>{loading && 'loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
}

export default App
