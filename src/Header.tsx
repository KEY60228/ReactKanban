import React from 'react'
import styled from 'styled-components'
import * as color from './color'

export const Header = ({ className }: { className?: string }) => {
  return (
    <Container className={className}>
      <Logo>Kanban Board</Logo>
      <CardFilter placeholder="Filter cards" />
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

const CardFilter = styled.input`
  display: flex;
  align-items: center;
  min-width: 300px;
  border: solid 1px ${color.Silver};
  border-radius: 3px;
`
