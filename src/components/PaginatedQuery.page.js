import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
}

export default function PaginatedQueryPage() {

  const  [pageNumber, setPageNumber] = useState(1);

  const {isLoading, data, isError, error, isFetching} = useQuery(['colors', pageNumber], () => fetchColors(pageNumber), {
    keepPreviousData: true
  })

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>{error?.message}</h1>
  }

  return (
    <>
    <div>
      {
        data?.data.map(color => {
          return <h3 key={color.id}>{color.label}</h3>
        })
      }
    </div>

    <div>
      <button onClick={() => setPageNumber(prev => prev - 1)} disabled={pageNumber === 1} >Prev Page</button>
      <button onClick={() => setPageNumber(prev => prev + 1)} disabled={pageNumber === 4}>Next Page</button>
    </div>

    {
      isFetching && <p>loading new rows...</p>
    }
    </>
  )
}