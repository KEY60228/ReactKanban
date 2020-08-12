import React from 'react'
import { Card } from './Card'
import styled from 'styled-components'
import * as color from './color'

export const Column = ({
  
}) => {
  return (
    <Container>
      <Header>
          <ColumnName></ColumnName>
      </Header>

      <VerticalScroll>
        <Card text='起きる'/>
      </VerticalScroll>
    </Container>
  )
};

const Container = styled.div`
  diplay: flex;
  flex-flow: column;
  width: 355px;
  height: 100%;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  background-color: ${color.LightSilver};

  > :not(:last-child) {
    flex-shrink: 0;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`

const ColumnName = styled.div`
  color: ${color.Black};
  font-size: 14px;
  font-weight: bold;
`

const ColumnHeader = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`

const VerticalScroll = styled.div`
  height: 100%;
  padding: 8px;
  overflow-y: auto;
  flex: 1 1 auto;

  > :not(:first-child) {
    margin-top: 8px;
  }
`