import React, { useState, useCallback, useRef } from 'react'
import produce from 'immer'
import { neighbors } from '../utils/neighbors'

const rowCount = 25
const colCount = 25

const Grid = () => {

    // initialize grid with zeros
    const [grid, setGrid] = useState(Array(rowCount).fill(Array(colCount).fill(0)))
    const [active, setActive] = useState(false)

    // access active state variable inside useCallback function
    const activeRef = useRef();
    activeRef.current = active

    const simulate = useCallback(() => {
        if (!activeRef.current) {
            return
        }
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
                                currentNeighbors += g[row][col]
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

        setTimeout(simulate, 1000)
    }, [])

    return (
        <>
            <button onClick={() => {
                setActive(!active)
                activeRef.current = true
                simulate()
            }}>{active ? 'stop' : 'start'}</button>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${colCount}, 15px)` }} >
                {grid.map((row, i) =>
                    row.map((col, j) => {
                        return <div key={`${i}-${j}`} onClick={() => {
                            if (active) {
                                return
                            }
                            let gridCopy = produce(grid, gridCopy => {
                                gridCopy[i][j] = grid[i][j] ? 0 : 1;
                            })
                            //gridCopy[i][j] = gridCopy[i][j] ? 0 : 1;
                            setGrid(gridCopy)
                        }} className='cell' style={{ backgroundColor: grid[i][j] ? 'black' : undefined }} />
                    }))}
            </div>
        </>
    )
}

export default Grid;