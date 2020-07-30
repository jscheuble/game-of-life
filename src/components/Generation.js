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
`;

const Button = styled.button`
    margin-left: 2%;
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
            Current Generation: {props.gen}
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