import React from 'react'
import styled from 'styled-components'

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2vw;
  justify-content: center;
`

const Grid = ({ children }) => {
  return (
    <ContainerGrid>
      {children}
    </ContainerGrid>
  )
}

export default Grid
