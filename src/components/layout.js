import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../theme/global-style'
import Header from './header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  >:nth-child(2) {
    flex: 1;
  }
  >:last-child {
    flex-shrink: 0;
  }
`

const Layout = ({ children }) => {

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <main>
        {children}
      </main>
      <footer></footer>
    </Container>
  )
}

export default Layout
