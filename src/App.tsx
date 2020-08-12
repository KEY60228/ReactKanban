import React from 'react'
import { Header } from './Header'
import { Column } from './Column'
import styled from 'styled-components'

export function App() {
  return (
    <Container>
      <Header />

      <MainArea>
        <HorizontalScroll>
          <Column 
            title="ToDo"
            cards={[
              { id: 'a', text: '朝食を取る' },
              { id: 'b', text: 'SNSをチェックする' },
              { id: 'c', text: '布団に入る' },
            ]}
          />
          <Column 
            title="Doing"
            cards={[
              { id: 'd', text: '顔を洗う' },
              { id: 'e', text: '歯を磨く' },
            ]}
          />
          <Column 
            title="Waiting"
            cards={[
            ]}
          />
          <Column 
            title="Done"
            cards={[
              { id: 'f', text: '布団から出る'},
            ]}
          />
        </HorizontalScroll>
      </MainArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const MainArea = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`

const HorizontalScroll = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: '';
  }
`
