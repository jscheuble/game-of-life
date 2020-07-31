import React from 'react'
import styled from 'styled-components'

import Grid from './components/Grid'
import Nav from './components/Nav'

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div>
      <Nav />
      <Container>
        <Grid />
      </Container>
    </div>
  );
}

export default App;
