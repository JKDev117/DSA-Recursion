/* 8. Find a way out of the maze ------------------------------------------------------------------ */
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

function findMazeExit(maze, row=0, column=0){
        if(maze[row][column]=='e'){
            console.log(`Exit found at row ${row} column ${column}`);
        } else if(maze[row][column] == ' '){
            maze[row][column] = 'v';
            //console.log(maze)

            if(row+1 < maze.length){
                if(maze[row+1][column]==' ' || maze[row+1][column]=='e') {
                    console.log('D')
                    return findMazeExit(maze, row+1, column)
                }    
            }

            if(column + 1 < maze[0].length){
                if(maze[row][column+1] == ' ' || maze[row][column+1]=='e'){
                    console.log('R')
                    return findMazeExit(maze, row, column + 1)
                }
            }
            
            if(row-1 > 0){
                if(maze[row-1][column] == ' ' || maze[row-1][column]=='e'){
                    console.log('U')
                    return findMazeExit(maze, row-1, column)
                }
            }
            
            if(column - 1 > 0){
                if(maze[row][column-1] == ' ' || maze[row][column-1]=='e'){
                    console.log('L')
                    return findMazeExit(maze, row, column-1)
                }
            }            
        }
}

findMazeExit(mySmallMaze)
findMazeExit(myBigMaze)



/*
    input to program: 
        [
            [' ', ' ', ' '],
            [' ', '*', ' '],
            [' ', ' ', 'e']
        ]
    output of the program: 
        D
        D
        R
        R
        Exit found at row 2 column 2
    input to each recursive call: 
        (maze, 1, 0)
        (maze, 2, 0)
        (maze, 2, 1)
        (maze, 2, 2)
    output of each recursive call:
        [
            ['v', ' ', ' '],
            ['v', '*', ' '],
            [' ', ' ', 'e']
        ]
        [
            ['v', ' ', ' '],
            ['v', '*', ' '],
            ['v', ' ', 'e']
        ]
        [
            ['v', ' ', ' '],
            ['v', '*', ' '],
            ['v', 'v', 'e']
        ]
        Exit found at row 2 column 2
-------------------------------------------------------------------------------------- */



//node 8-maze.js

    

