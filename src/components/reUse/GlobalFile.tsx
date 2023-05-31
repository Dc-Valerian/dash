import React from 'react'
import styled from 'styled-components'

interface IProps{
    bcc?:string;
    title?:string;
}

const GlobalFile:React.FC<IProps> = ({bcc,title}) => {
  return (
    <div>
        <Container bcc={`${bcc}`}>
          {title}
        </Container>
    </div>
  )
}

export default GlobalFile

const Container = styled.div<{bcc:string}>`
background-color: ${({bcc})=>bcc};
height: 500px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`