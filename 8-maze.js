/* #. name of exercise ------------------------------------------------------------------ */





/*
    input to program: 
    output of the program: 
    input to each recursive call: 
    output of each recursive call:
-------------------------------------------------------------------------------------- */

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mySmallMaze[0][1])


function findMazeDimensions(maze){
    numRows = maze.length
    numColumns = maze[0].length
    console.log(numRows, numColumns)
}

findMazeDimensions(mySmallMaze) //=> 3 3
findMazeDimensions(maze) //=> 5 7

//findMazeExit(maze)

//node 8-maze.js

    

