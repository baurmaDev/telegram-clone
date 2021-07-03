import React from 'react';
import styled from 'styled-components'
import Messages from './Messages'
import Chat from './Chat'



function App() {
  return (
    <Container>
      <Left>
        <Messages />
      </Left>
      <Right>
        <Chat />
      </Right>  
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`
const Left = styled.div`
  
`
const Right = styled.div`
  flex-grow: 1;
`


export default App;
