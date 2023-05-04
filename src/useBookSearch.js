import axios from 'axios'
import {useEffect, useState} from 'react'

const useBookSearch = (query, pageNumber) => {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: {q: query, page: pageNumber},
    })
  }, [query, pageNumber])
  return null
}

export default useBookSearch
