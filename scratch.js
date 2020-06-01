//node scratch.js


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

function findMazeDimensions(maze){
    numRows = maze.length
    numColumns = maze[0].length
    console.log(numRows, numColumns)
}

findMazeDimensions(mySmallMaze) //=> 3 3
findMazeDimensions(maze) //=> 5 7


