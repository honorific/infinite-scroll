import axios from 'axios'
import {useEffect, useState} from 'react'

const useBookSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setBooks([])
  }, [query])

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
        console.log('res data', res.data)

        setBooks((prevBooks) => {
          return [
            ...new Set([...prevBooks, ...res.data.docs.map((b) => b.title)]),
          ]
        })

        setHasMore(res.data.docs.length > 0)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
        console.log('error is', e)
      })
    return () => {
      cancel()
    }
  }, [query, pageNumber])
  console.log('books after useEffect are: ', books)

  return {loading, books, error, hasMore}
}

export default useBookSearch
