import axios from 'axios'
import {useEffect, useState} from 'react'

const useBookSearch = (query, pageNumber) => {
  useEffect(() => {
    let cancel
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: {q: query, page: pageNumber},
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res.data)
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
