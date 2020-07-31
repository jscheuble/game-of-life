# Conway's Came of Life

This application is a React implementation of Conway's Game of Life.
Conway's Game of Life is a two-dimensional grid containing cells that can either appear dead or alive. The algorithm continuously computes the next generation, resembling a turing machine. The algorithm abides to these rules
- Any live cell with 2 or 3 live neighbors survives to the next generation.
- Any dead cell with exactly 3 live neighbors becomes a live cell.
- All other live cells die in the next generation.



## Deploy Link

https://game-of-life-neon.vercel.app/


## Installation/Setup

```shell
$ npm install
$ npm start
```

## Current Features

- Simulation can start and stop, displaying the next generation in a continuous pattern.
- Users can generate a random grid or create custom patterns
- Users can select different speed settings
- Users can skip generations one by one


## Future Features

- Currently, the grid is not mobile responsive. I plan to create an adaptable mobile version.
- I plan to create a dropdown where users can select from various preselected grid patterns.
- I also plan to incorporate more color into the simulation, potentially an animated gradient or randomly generated colors for each individual cell.