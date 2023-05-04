import {useState} from 'react'
import useBookSearch from './useBookSearch'

const App = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  useBookSearch(query, pageNumber)

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
      <input type='text' onChange={handleSearch} />
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Loading...</div>
      <div>Error</div>
    </>
  )
}

export default App
