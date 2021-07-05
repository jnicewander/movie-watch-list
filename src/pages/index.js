import React, { useState } from "react"
import Layout from '../components/layout'
import SearchBar from "../components/search-bar"
import Movies from "../components/movies"
import { useGetMoviesApi } from "../hooks/useGetMoviesApi"

const IndexPage = () => {
  const [userInput, setUserInput] = useState('')
  const [{ data, status }, doFetch] = useGetMoviesApi()
  const { results: movies = [] } = data;

  const handleChange = event => {
    setUserInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    doFetch({ query: userInput })
  }
  
  /*
    send a page number as a query parameter using built in math functions
    to ensure we dont request a page larger than total_pages, or smaller than 1
  */ 
  const handlePrev = () => {
    doFetch(prevState => ({
      ...prevState,
      page: Math.max(data.page - 1, 1),
    }))
  }

  const handleNext = () => {
    doFetch(prevState => ({
      ...prevState,
      page: Math.min(data.page + 1, data.total_pages),
    }))
  }

  return (
    <Layout>
      <title>Home || Movie Tracker</title>
      <SearchBar
        value={userInput}
        onSubmit={e => handleSubmit(e)}
        onChange={e => handleChange(e)}
      />
      {status === 'fetched' &&
        <>
          <div>
            <p>Total search results: {data.total_results}</p>
            <p>Current Page: {data.page} / {data.total_pages}</p>      
            <button
              onClick={() => handlePrev()}
              disabled={data.page <= 1}
            >
              Previous page
            </button>
            <button 
              onClick={() => handleNext()}
              disabled={data.page === data.total_pages}
            >
              Next Page
            </button>
          </div>
          <Movies
            query={userInput}
            status={status}
            movies={movies}
          />
        </>
      }
    </Layout>
  )
}

export default IndexPage