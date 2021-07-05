import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetMoviesApi = () => {
  const [data, setData] = useState({})
  const [queryParams, setQueryParams] = useState({
    query: '',
    page: 1,
  })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if(!queryParams.query) return;

    const fetchMovies = async () => {
      setStatus('fetching');
      try {
        const response = await axios('/api/get-movies', {
          params: { 
            ...queryParams
          }
        });
        const { movies } = await response.data;
        setData(movies);
        setStatus('fetched');
      } catch (error) {
        setStatus('error')
      }
    };
    fetchMovies();
  }, [queryParams])

  return [{ data, status }, setQueryParams];
}
