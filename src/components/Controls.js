import React from 'react'
import produce from 'immer'
import styled from 'styled-components'

const rowCount = 25
const colCount = 50

const Container = styled.div`
    margin: 2% auto;
    width: 60%;
    display: flex;
    justify-content: space-evenly;
`;

const Button = styled.button``;

const Controls = props => {

    return (
        <Container>

            {/* start / stop button  */}
            <Button onClick={() => {
                props.setActive(!props.active)
                props.activeRef.current = true
                props.simulate()
            }}>{props.active ? 'stop' : 'start'}
            </Button>

            {/* random button  */}
            <Button onClick={() => {
                if (props.active) {
                    return
                }
                props.setGrid(g => {
                    return produce(g, gridCopy => {
                        for (let i = 0; i < rowCount; i++) {
                            for (let j = 0; j < colCount; j++) {
                                Math.random() > 0.7 ? gridCopy[i][j] = 1 : gridCopy[i][j] = 0
                            }
                        }
                    })
                })
            }}>random</Button>

            {/* clear button  */}
            <Button onClick={() => {
                if (props.active) {
                    return
                }
                props.setGrid(Array(rowCount).fill(Array(colCount).fill(0)))
            }}>
                clear
            </Button>
        </Container>
    )
}

export default Controls;