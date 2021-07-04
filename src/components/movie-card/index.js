import React from 'react'
import styled from 'styled-components'
import FallbackPoster from './fallback-poster'

const Container = styled.div`

`
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const MovieCard = (props) => {
  // some movies don't have posters and no fallback image was provided
  const Poster = () => {
    if(props.poster_path !== null) {
      const poster = `https://image.tmdb.org/t/p/original/${props.poster_path}`;
      return <Image loading="lazy" src={poster} alt={`${props.title} movie poster`} />;
    }
    return <FallbackPoster />
  }

  return (
    <Container className={props.className}>
      {Poster()}
      <p>{props.title}</p>
    </Container>
  )
}

export default MovieCard