import React from 'react'
import styled from 'styled-components'
import MovieCard from '../movie-card'


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(250px, 350px));
  gap: 1vw;
`

const Movies = ({ className, movies, status }) => {

  return (
    <Grid className={className}>
      {status === 'fetched' &&
        movies.map(movie => (
          <MovieCard
            key={movie.id}
            {...movie}
          />
      ))}
    </Grid>
  )
}

export default Movies
