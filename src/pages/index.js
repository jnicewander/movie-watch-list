import React, { useState } from "react"
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
    doFetch(userInput)
  }

  return (
    <main>
      <title>Home || Movie Watch List</title>
      <SearchBar
        value={userInput}
        onSubmit={e => handleSubmit(e)}
        onChange={e => handleChange(e)}
      />
      <Movies
        status={status}
        movies={movies}
      />
    </main>
  )
}

export default IndexPage