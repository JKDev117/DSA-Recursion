/*
For each of these exercises, without using any code, you are expected to identify the following:

What is the input to the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call?
*/


/* 1. counting sheep ------------------------------------------------------------------ */
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

/*
input to program: 3
    output of the program: 
        3: Another sheep jumps over the fence
        2: Another sheep jumps over the fence
        1: Another sheep jumps over the fence
        All sheep jumped over the fence
    input to each recursive call: 2, 1, 0
    output of each recursive call: 
        2: Another sheep jumps over the fence
        1: Another sheep jumps over the fence
        All sheep jumped over the fence
-------------------------------------------------------------------------------------- */




/*2. Power Calculator ---------------------------------------------------------------- */
function powerCalculator(base, exponent) {
    //base case
    if(exponent===0){
        return 1;
    } else if(exponent < 0){
        return "Exponent should be >= 0"
    }
    //general case
    return base * powerCalculator(base, exponent - 1)    
}

const base = 3
const exponent = 3

console.log(powerCalculator(base, exponent));

/*
    input to program: 3, 3
    output of the program: 27
    input to each recursive call: (3, 2), (3, 1), (3, 0)
    output of each recursive call: 
        3 * powerCalculator(3, 2) => 27
        3 * powerCalculator(3, 1) => 9
        3 * powerCalculator(3, 0) => 3
-------------------------------------------------------------------------------------- */




