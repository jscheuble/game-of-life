import React from 'react'
import produce from 'immer'
import styled from 'styled-components'

// import { presets } from '../utils/presets'

const rowCount = 25
const colCount = 50

const Container = styled.div`
    margin: 0 auto 5% auto;
    width: 60%;
    display: flex;
    justify-content: space-evenly;
`;

const Button = styled.div`
    box-shadow: 0px 0px 5px 5px #00DAD9;
    padding: 1% 2%;
    border-radius: 7px; 
`;

const Dropdown = styled.select`
    background: transparent;
    color: #fff;
    padding: 1%;
    border-radius: 7px;
    box-shadow: 0px 0px 5px 5px #00DAD9;
`;

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
                props.setGen(1)
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

            {/* time interval dropdown */}
            <Dropdown onChange={e => {
                e.preventDefault()
                props.setSpeed(e.target.value)
            }}>
                <option value='1000'>Slow</option>
                <option value='600'>Medium</option>
                <option value='100'>Fast</option>
                <option value='10'>Ultra-fast</option>
            </Dropdown>

            {/* preset grid dropdown */}
            {/* <select onChange={e => {
                props.setGen(1)
                props.setGrid(presets[e.target.value])
            }}>
                <option value='0'>select a pattern</option>
                <option value='1'>penta-ships</option>
            </select> */}

            {/* clear button  */}
            <Button onClick={() => {
                if (props.active) {
                    return
                }
                props.setGen(0)
                props.setGrid(Array(rowCount).fill(Array(colCount).fill(0)))
            }}>
                clear
            </Button>
        </Container>
    )
}

export default Controls;