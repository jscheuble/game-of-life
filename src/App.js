import React from 'react'
import styled from 'styled-components'

import Grid from './components/Grid'
import Rules from './components/Rules'

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function App() {
  return (
    <div>
      <h1 className='heading'>&#10036; The Game of Life &#10036;</h1>
      <Container>
        <Rules />
        <Grid />
      </Container>
    </div>
  );
}

export default App;
