//node scratch.js


temp = "abc".substring(0,0) //=> ""
temp2 = "abc".substring(1) //=> "bc"
temp3 = "abc".substring(3) //=> ""

console.log(temp)
console.log(temp2)
console.log(temp3)


/*
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
*/

