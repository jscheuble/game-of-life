import React, { useState, useCallback, useRef } from 'react'
import produce from 'immer'
import styled from 'styled-components'

import { neighbors } from '../utils/neighbors'
import colors from '../utils/colors'
import Controls from './Controls'
import Generation from './Generation'

const rowCount = 25
const colCount = 50

const width = rowCount * 30 + 2

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const GridContainer = styled.div`
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
    const activeRef = useRef();
    activeRef.current = active

    const genRef = useRef();
    genRef.current = gen

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
                        let currentNeighbors = 0;
                        neighbors.forEach(([x, y]) => {
                            const row = i + x
                            const col = j + y
                            // check cell boundaries
                            if (row >= 0 && row < rowCount && col >= 0 && col < colCount) {
                                currentNeighbors += g[row][col];
                            }
                        })
                        if (currentNeighbors < 2 || currentNeighbors > 3) {
                            gridCopy[i][j] = 0;
                        } else if (grid[i][j] === 0 && currentNeighbors === 3) {
                            gridCopy[i][j] = 1;
                        }
                    }
                }
            })
        })
        setTimeout(simulate, parseInt(speed))
    }, [speed])

    // const cellColor = (grid, i, j) => {
    //     return grid[i][j] === 0 ?
    //         undefined :
    //         grid[i][j] === 1 ?
    //             colors[0]
    //             : grid[i][j] === 2 ?
    //                 colors[1]
    //                 : grid[i][j] === 3 ?
    //                     colors[2]
    //                     : grid[i][j] === 4 ?
    //                         colors[3]
    //                         : grid[i][j] === 5 ?
    //                             colors[4]
    //                             : grid[i][j] === 6 ?
    //                                 colors[5]
    //                                 : grid[i][j] === 7 ?
    //                                     colors[6]
    //                                     : colors[Math.floor(Math.random() * Math.floor(7))]
    // }

    return (
        <MainContainer>
            <Controls setActive={setActive} active={active} activeRef={activeRef} simulate={simulate} grid={grid} setGrid={setGrid} setSpeed={setSpeed} setGen={setGen} />
            <GridContainer style={{ display: 'grid', gridTemplateColumns: `repeat(${colCount}, 15px)` }} >
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
                        }} className='cell' style={{ backgroundColor: grid[i][j] ? colors[0] : undefined }} />
                    }))}
            </GridContainer>
            <Generation gen={gen} setGen={setGen} grid={grid} setGrid={setGrid} activeRef={activeRef} />
        </MainContainer>
    )
}

export default Grid;