import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.header`
`
const Title = styled.h1`
  font-size: clamp(1.5rem, 1rem + 2.5vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
`
const Nav = styled.nav`
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  margin-right: 1rem;

  &.active {
    text-decoration: underline;
  }
`

const Header = () => {
  return (
    <Container>
      <Title>Movie Tracker</Title>
      <Nav>
        <NavLink 
          activeClassName="active" 
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          activeClassName="active"
          to="/watch-list"
        >
          Watch List
        </NavLink>
      </Nav>
    </Container>
  )
}

export default Header
