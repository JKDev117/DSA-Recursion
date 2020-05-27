/*
For each of these exercises, without using any code, you are expected to identify the following:

What is the input to the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call?
*/

/*1. counting sheep
    input to program: 3
    output of the program: 
        3: Another sheep jumps over the fence
        2: Another sheep jumps over the fence
        1: Another sheep jumps over the fence
        All sheep jumped over the fence
    input to each recursive call: number - 1
    output of each recursive call: console.log(`${number}: Another sheep jumps over the fence`)
*/

function countSheep(number) {
    //base case
    if(number===0){
        console.log("All sheep jump over the fence.");
        return;
    }
    //general case
    console.log(`${number}: Another sheep jumps over the fence`);
    return countSheep(number - 1);
}

let num = 3;
countSheep(num);



