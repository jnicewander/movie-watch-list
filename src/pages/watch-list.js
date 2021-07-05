import React from 'react'
import Layout from '../components/layout'
import Movies from '../components/movies'
import WatchListContext from '../context/watchlist-context'

const WatchList = () => {

  return (
    <Layout>
      <title>Watch List || Movie Tracker</title>
      <WatchListContext.Consumer>
        {({ movies }) => (
          <Movies
            movies={movies}
          />
        )}
      </WatchListContext.Consumer>
    </Layout>
  )
}

export default WatchList
