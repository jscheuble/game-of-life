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
                grid[i][j] = 1;
            }
        }
    }
    return grid;
}

export const presets = [
    empty,
    penta,
]