import React, { useState } from 'react';

const rowCount = 25
const colCount = 25

const Grid = () => {

    // initialize grid with zeros
    const [grid, setGrid] = useState(Array(rowCount).fill(Array(colCount).fill(0)))

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${colCount}, 15px)` }} >
            {grid.map((row, i) =>
                row.map((col, j) => {
                    return <div key={`${i}-${j}`} onClick={() => {
                        let gridCopy = JSON.parse(JSON.stringify(grid))
                        // update this, toggle must first check if the game is running
                        gridCopy[i][j] = gridCopy[i][j] ? 0 : 1;
                        setGrid(gridCopy)
                    }} className='cell' style={{ backgroundColor: grid[i][j] ? 'black' : undefined }} />
                }))}
        </div>
    )
}

export default Grid;