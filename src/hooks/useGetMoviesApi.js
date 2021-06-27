import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetMoviesApi = () => {
  const [data, setData] = useState({})
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if(!query) return;

    const fetchMovies = async () => {
      setStatus('fetching');
      try {
        const response = await axios('/api/get-movies', {
          params: { query: query }
        });
        const { movies } = await response.data;
        setData(movies);
        setStatus('fetched');
      } catch (error) {
        setStatus('error')
      }
    };
    fetchMovies();
  }, [query])

  return [{ data, status }, setQuery];
}
