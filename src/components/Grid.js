import React, { useState } from 'react';

const rowCount = 25
const colCount = 25

const Grid = () => {

    const [grid, setGrid] = useState(Array(rowCount).fill(Array(colCount).fill(0)))

    console.log('grid', grid)

    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${colCount}, 15px)` }} >
            {grid.map((row, i) =>
                row.map((col, j) => {
                    return <div key={`${i}-${j}`} className='cell' style={{ backgroundColor: grid[i][j] ? 'black' : undefined }} />
                }))}
        </div>
    )
}

export default Grid;