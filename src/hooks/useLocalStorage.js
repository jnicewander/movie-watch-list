import { useEffect, useReducer } from "react"

const WatchListReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_MOVIE':      
      return {
        ...state,
        movies: [payload, ...state.movies]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(
          movie => movie.id !== payload
        )
      }
    default:
      return {
        ...state
      }
  }
}

export const useLocalStorage = () => {
  // check for existing local storage value and set initial state
  const initialState = {
    movies: localStorage.getItem('movies')
    ? JSON.parse(localStorage.getItem('movies'))
    : []
  }
  
  const [reducerState, dispatch] = useReducer(WatchListReducer, initialState)

  // reducer handles reducer state and triggers this function which handles the local storage data
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(reducerState.movies))
  }, [reducerState])

  // available actions to pass to the reducer
  const addMovie = movie => {
    dispatch({ type: 'ADD_MOVIE', payload: movie })
  }
  const removeMovie = movie => {
    dispatch({ type: 'REMOVE_MOVIE', payload: movie.id })
  }

  return [ reducerState, addMovie, removeMovie];
}