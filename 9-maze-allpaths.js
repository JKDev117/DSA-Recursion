/* 9. Find ALL the ways out of the maze ------------------------------------------------------------------ */

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


function findMazeExit(maze, row=0, column=0, path=[]){
        
    if(maze[row][column]=='e'){
        console.log(`Exit found at row ${row} column ${column}`);
        console.log(maze)
        console.log(path)
        return path
    }

    if(maze[row][column]==' '){
        maze[row][column]='v'
        
        //R
        if(column < maze[0].length-1){
            findMazeExit(maze, row, column+1, [...path, 'R'])
        }
        
        //D
        if(row < maze.length-1){
            findMazeExit(maze, row+1, column, [...path, 'D'])
        }

        //L
        if(column > 0){
            findMazeExit(maze, row, column-1, [...path, 'L'])
        }   

        //U
        if(row > 0){
            findMazeExit(maze, row-1, column, [...path, 'U'])
        }

        maze[row][column]=' '
    }

}

findMazeExit([[' ','e']])

findMazeExit(mySmallMaze)

findMazeExit(myBigMaze)


/*
    input to program: 
        [[' ','e']]
    
    output of the program: 
        Exit found at row 1 column 0
        [ 'v', 'e' ]
        [ 'D' ]

    input to each recursive call: 
        ( maze, 0, 1, ['R'] )
        
    output of each recursive call:
        Exit found at row 1 column 0
        [ 'v', 'e' ]
        [ 'D' ]

-------------------------------------------------------------------------------------- */

//node 9-maze-allpaths.js


