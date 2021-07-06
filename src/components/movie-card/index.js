import React, { useContext } from 'react'
import styled from 'styled-components'
import Poster from './poster'
import WatchListContext from '../../context/watchlist-context'

const Container = styled.div`
  position: relative;
`

const Details = styled.div`
`

const MovieCard = ({ movie }) => {

  const {
    movies: watchList,
    addMovie,
    removeMovie
  } = useContext(WatchListContext)

  // set click handler and render button text
  const onWatchList = watchList.find(listMovie => listMovie.id === movie.id)

  const handleClick = movie => {
    if (onWatchList) {
      removeMovie(movie)
    } else {
      addMovie(movie)
    }
  }

  return (
    <Container>
      <Poster movie={movie} />
      <Details>
        <p>{movie.title}</p>

        <button onClick={() => handleClick(movie)}>
          {onWatchList ? "Remove" : "Add Movie"}
        </button>
      </Details>
    </Container>
  )
}

export default MovieCard