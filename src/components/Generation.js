import React from 'react'
import produce from 'immer'
import styled from 'styled-components'

import { neighbors } from '../utils/neighbors'

const rowCount = 25
const colCount = 50

const Container = styled.div`
    margin-top: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    margin-left: 2%;
    box-shadow: 0px 0px 5px 5px #00DAD9;
    padding: 1% 1.5%;
    border-radius: 7px; 
`;

const P = styled.p`
    font-size: 20px;
`;

const Generation = props => {

    const skipGeneration = () => {
        props.setGrid(g => {
            // create new version of grid to manipulate
            return produce(g, gridCopy => {
                for (let i = 0; i < rowCount; i++) {
                    for (let j = 0; j < colCount; j++) {
                        let currentNeighbors = 0
                        neighbors.forEach(([x, y]) => {
                            const row = i + x
                            const col = j + y
                            // check cell boundaries
                            if (row >= 0 && row < rowCount && col >= 0 && col < colCount) {
                                currentNeighbors += g[row][col]
                            }
                        })
                        if (currentNeighbors < 2 || currentNeighbors > 3) {
                            gridCopy[i][j] = 0
                        } else if (props.grid[i][j] === 0 && currentNeighbors === 3) {
                            gridCopy[i][j] = 1
                        }
                    }
                }
            })
        })
    }

    return (
        <Container>
            <P>Current Generation: {props.gen}</P>
            <Button onClick={() => {
                if (props.activeRef.current) {
                    return
                }
                skipGeneration()
                props.setGen(props.gen + 1)
            }}>+1</Button>
        </Container>
    )
}

export default Generation;