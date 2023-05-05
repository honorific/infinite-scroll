import axios from 'axios'
import {useEffect, useState} from 'react'

const useBookSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: {q: query, page: pageNumber},
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res.data)
        setBooks((prevBooks) => {
          return [...new Set([...prevBooks, res.data.docs.map((b) => b.title)])]
        })
        console.log('books with titles are: ', books)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
      })
    return () => {
      cancel()
    }
  }, [query, pageNumber])

  return null
}

export default useBookSearch
