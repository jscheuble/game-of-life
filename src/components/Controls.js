import React from 'react'
import produce from 'immer'

const rowCount = 25
const colCount = 50

const Controls = props => {

    return (
        <div>
            {/* start / stop button  */}
            <button onClick={() => {
                props.setActive(!props.active)
                props.activeRef.current = true
                props.simulate()
            }}>{props.active ? 'stop' : 'start'}
            </button>
            <button onClick={() => {
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
            }}>random</button>
        </div>
    )
}

export default Controls;