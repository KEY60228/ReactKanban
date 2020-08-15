import React from 'react'
import styled from 'styled-components'
import { CardFilter } from './CardFilter'
import * as color from './color'

export const Header = ({
  filterValue,
  onFilterChange,
  className,
}: {
  filterValue?: string
  onFilterChange?(value: string): void
  className?: string
}) => {
  return (
    <Container className={className}>
      <Logo>Kanban Board</Logo>
      <CardFilter value={filterValue} onChange={onFilterChange} />
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
  color: ${color.Silver};
  font-size: 16px;
  font-weight: bold;
`
