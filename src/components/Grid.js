import React, { useState, useCallback, useRef } from 'react'
import produce from 'immer'
import styled from 'styled-components'

import { neighbors } from '../utils/neighbors'
import Controls from './Controls'
import Generation from './Generation'

const rowCount = 25
const colCount = 50

const width = rowCount * 30 + 2

const Container = styled.div`
    margin: auto;
    width: ${width}px;
    box-shadow: 0px 0px 20px 10px #00DAD9;
`;


const Grid = () => {

    // initialize grid with zeros
    const [grid, setGrid] = useState(Array(rowCount).fill(Array(colCount).fill(0)))
    const [active, setActive] = useState(false)
    const [speed, setSpeed] = useState(1000)
    const [gen, setGen] = useState(0)

    // access active state variable inside useCallback function
    const activeRef = useRef(active);
    activeRef.current = active

    const genRef = useRef(gen);
    genRef.current = gen

    const speedRef = useRef(speed);
    speedRef.current = speed

    const simulate = useCallback(() => {
        if (!activeRef.current) {
            return
        }
        setGen(genRef.current + 1)
        setGrid(g => {
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
                                currentNeighbors += g[row][col];
                            }
                        })
                        if (currentNeighbors < 2 || currentNeighbors > 3) {
                            gridCopy[i][j] = 0
                        } else if (grid[i][j] === 0 && currentNeighbors === 3) {
                            gridCopy[i][j] = 1
                        }
                    }
                }
            })
        })

        setTimeout(simulate, speedRef.current)
    }, [])

    return (
        <>
            <Controls setActive={setActive} active={active} activeRef={activeRef} simulate={simulate} grid={grid} setGrid={setGrid} setSpeed={setSpeed} setGen={setGen} />
            <Container style={{ display: 'grid', gridTemplateColumns: `repeat(${colCount}, 15px)` }} >
                {grid.map((row, i) =>
                    row.map((col, j) => {
                        return <div key={`${i}-${j}`} onClick={() => {
                            if (activeRef.current) {
                                return
                            } else if (gen === 0) {
                                setGen(1)
                            }

                            let gridCopy = JSON.parse(JSON.stringify(grid))
                            gridCopy[i][j] = gridCopy[i][j] ? 0 : 1;
                            setGrid(gridCopy)
                        }} className='cell' style={{ backgroundColor: grid[i][j] ? '#00DAD9' : undefined }} />
                    }))}
            </Container>
            <Generation gen={gen} setGen={setGen} grid={grid} setGrid={setGrid} activeRef={activeRef} />
        </>
    )
}

export default Grid;