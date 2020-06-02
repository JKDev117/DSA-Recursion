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

let myBigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function findMazeExit(maze, row=0, column=0, direction){
        if(maze[row][column]=='e'){
            console.log(`Exit found at row ${row} column ${column}`);
        } else if(maze[row][column] == ' '){
            maze[row][column] = 'v';
            //console.log(maze)
            if(direction){
                console.log(direction)
            }

            if(row < maze.length - 1){
                //if(maze[row+1][column]==' ' || maze[row+1][column]=='e') {
                    findMazeExit(maze, row+1, column, 'D')
                    //console.log('D')

                //}    
            }

            if(column < maze[0].length - 1){
                //if(maze[row][column+1] == ' ' || maze[row][column+1]=='e'){
                    findMazeExit(maze, row, column + 1, 'R')
                    //console.log('R')

                //}
            }
            
            if(row > 0){
                //if(maze[row-1][column] == ' ' || maze[row-1][column]=='e'){
                    findMazeExit(maze, row-1, column, 'U')
                    //console.log('U')

                //}
            }
            
            if(column > 0){
                //if(maze[row][column-1] == ' ' || maze[row][column-1]=='e'){
                    findMazeExit(maze, row, column-1, 'L')
                    //console.log('L')

                //}
            }            
        }
}

//findMazeExit(mySmallMaze)
findMazeExit(myBigMaze)


//node 9-maze-allpaths.js
