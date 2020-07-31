import React, { useState } from 'react'
import styled from 'styled-components'

import Grid from './components/Grid'
import Nav from './components/Nav'
import Rules from './components/Rules'
import About from './components/About'

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [rules, setRules] = useState(false)
  const [about, setAbout] = useState(false)

  return (
    <div>
      <Nav setRules={setRules} about={about} setAbout={setAbout} />
      {rules ? <Rules setRules={setRules} /> : undefined}
      {about ? <About setAbout={setAbout} /> : undefined}
      <Container>
        <Grid />
      </Container>
    </div>
  );
}

export default App;
