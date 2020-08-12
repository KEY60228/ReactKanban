import React from 'react'
import styled from 'styled-components'
import { CardFilter } from './CardFilter'
import * as color from './color'

export const Header = ({ className }: { className?: string }) => {
  return (
    <Container className={className}>
      <Logo>Kanban Board</Logo>
      <CardFilter/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${color.Navy};
`

const Logo = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`
