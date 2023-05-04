import axios from 'axios'
import {useEffect, useState} from 'react'

const useBookSearch = (query, pageNumber) => {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: {q: query, page: pageNumber},
    }).then((res) => {
      console.log(res.data)
    })
  }, [query, pageNumber])
  return null
}

export default useBookSearch
