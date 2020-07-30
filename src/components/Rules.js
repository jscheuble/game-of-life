import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 20%;
`;

const Rules = () => {
    return (
        <Container>
            <h4>Rules</h4>
            <ul>
                <li>Any live cell with 2 or 3 live neighbors survives to the next generation.</li>
                <li>Any dead cell with exactly 3 live neighbors becomes a live cell</li>
                <li>All other live cells die in the next generation.</li>
            </ul>
        </Container>
    )
}

export default Rules;