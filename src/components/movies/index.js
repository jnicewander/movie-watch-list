import React from 'react'
import styled from 'styled-components'
import MovieCard from '../movie-card'
import Grid from './grid'

const Movies = ({ movies }) => {
  return (
    <Grid>
      {movies.length > 0 &&
        movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
      ))}
    </Grid>
  )
}

export default Movies
