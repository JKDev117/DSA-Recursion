/* #. name of exercise ------------------------------------------------------------------ */





/*
    input to program: 
    output of the program: 
    input to each recursive call: 
    output of each recursive call:
-------------------------------------------------------------------------------------- */


/* 22.2 Assignment */
/* 9. Find ALL the ways out of the maze   */

let baseMaze = [['e']]

let maze2 = [[' ', 'e']]

let maze3 = [[' ', ' ', 'e']]

let maze4 = [
  [' ', ' '],
  [' ', 'e']
]

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let myBigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function findMazeExit(maze, row=0, column=0, direction){
        if(maze[row][column]=='e'){
            if(direction){
              console.log(direction)
            }
            console.log(`Exit found at row ${row} column ${column}`);
            console.log(maze);
            console.log("------------------------------------------");
        } else if(maze[row][column] == ' '){
            maze[row][column] = 'v';
            //console.log(maze)
            if(direction){
                console.log(direction)
            }
            console.log(row, column)

            if(row < maze.length - 1){
                findMazeExit(maze, row+1, column, 'D')
            }

            if(column < maze[0].length - 1){
                findMazeExit(maze, row, column + 1, 'R')
            }

            if(row > 0 && column!=maze[0].length-1){
                findMazeExit(maze, row-1, column, 'U')
            }
            
            if(column > 0){
                findMazeExit(maze, row, column-1, 'L')
            }            
        }
}

//findMazeExit(baseMaze)
//findMazeExit(maze2)
//findMazeExit(maze3)
//findMazeExit(maze4)
//findMazeExit(mySmallMaze)
findMazeExit(myBigMaze)


//node 9-maze-allpaths.js
