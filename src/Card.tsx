import React from 'react'
import styled from 'styled-components'
import * as color from './color'

export const Card = ({text}: {text?: string}) => {
  return (
    <Container>
      {text?.split(/(https?:\/\/\S+)/g).map((fragment, i) => 
        i % 2 === 0 ? (
          <Text key={i}>{ fragment }</Text>
        ) : (
          <Link key={i} href={ fragment }>{ fragment }</Link>
        )
      )}
    </Container>
  )
}

const Container = styled.div.attrs({
  draggable: true,
})`
  position: relative;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
  padding: 8px 32px;
  background-color: ${color.White};
  cursor: move;
`

const Text = styled.span`
  color: ${color.Black};
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
`

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: ${color.Blue};
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-wrap;
`