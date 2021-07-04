// wrap all pages with context
import React from 'react'
import { WatchListProvider } from './src/context/watchlist-context'

export const wrapRootElement =  ({ element }) => (
  <WatchListProvider>{element}</WatchListProvider>
)
