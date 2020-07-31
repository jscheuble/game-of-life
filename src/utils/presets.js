const rowCount = 25
const colCount = 50
const grid = Array(rowCount).fill(Array(colCount).fill(0))

const empty = () => {
    return grid;
}

const penta = () => {
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (i === 10) {
                console.log(i, j)
                grid[i][j] = 1;
            } else {
                console.log('***', i, j)
            }
        }
    }
    return grid;
}

export const presets = [
    empty,
    penta,
]