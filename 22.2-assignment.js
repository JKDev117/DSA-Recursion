/*
For each of these exercises, without using any code, you are expected to identify the following:

What is the input to the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call?
*/

//1. counting sheep

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


