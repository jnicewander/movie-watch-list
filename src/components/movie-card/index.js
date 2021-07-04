import React, { useContext } from 'react'
import styled from 'styled-components'
import FallbackPoster from './fallback-poster'
import WatchListContext from '../../context/watchlist-context'

const Container = styled.div`
  /* TODO replace with link to movie details page */
`
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const MovieCard = ({ movie, className }) => {

  // some movies don't have posters and no fallback image was provided
  const Poster = () => {
    if(movie.poster_path !== null) {
      const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
      return <Image loading="lazy" src={poster} alt={`${movie.title} movie poster`} />;
    }
    return <FallbackPoster />
  }

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
    <Container className={className}>
      {Poster()}
      <p>{movie.title}</p>

      <button onClick={() => handleClick(movie)}>
        {onWatchList ? "Remove" : "Add Movie"}
      </button>

    </Container>
  )
}

export default MovieCard