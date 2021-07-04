import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

// set default values for context to be used when component has no matching providers above it
const initialState = {
  movies: [],
  addMovie: () => {},
  removeMovie: () => {},
}

const WatchListContext = createContext(initialState);

export const WatchListProvider = ({ children }) => {
  // set new values inside provider to get access to local storage
  const [{ movies }, addMovie, removeMovie] = useLocalStorage()

  return (
    <WatchListContext.Provider
      value={{
        movies,
        addMovie,
        removeMovie
      }}
    >
      {children}
    </WatchListContext.Provider>
  )
}

export default WatchListContext