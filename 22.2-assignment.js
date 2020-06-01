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




/* 2. Power Calculator ---------------------------------------------------------------- */
function powerCalculator(base, exponent) {
    //base case
    if(exponent===0){
        return 1;
    } 
    if(exponent < 0){
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




/* 3. Reverse String ------------------------------------------------------------------ */
function reverseString(string) {
    //base case
    if(string.length === 1){
        return string;
    }
    //general case
    return string.slice(-1) + reverseString(string.slice(0,string.length-1))   
}

const word = "blue"
console.log(reverseString(word));

/*
    input to program: "blue"
    output of the program: "eulb"
    input to each recursive call: "blu", "bl", "b" 
    output of each recursive call:
        "e" + reverseString("blu") => "eulb"
        "u" + reverseString("bl") => "ulb"
        "l" + reverseString("b") => "lb"
-------------------------------------------------------------------------------------- */


/* 4. nth Triangular Number ------------------------------------------------------------------ */
function triangularNum(nth) {
    //base case
    if(nth === 1){
        return nth;
    }
    //general case
    return nth + triangularNum(nth - 1)
}

const sequence = [1,3,6,10,15,21,28,36,45];
const nth = 4
console.log(triangularNum(nth));

/*
    input to program: 4
    output of the program: 10 
    input to each recursive call: 3, 2
    output of each recursive call:
        4 + triangularNum(3) => 10
        3 + triangularNum(2) => 6
        2 + triangularNum(1) => 3
-------------------------------------------------------------------------------------- */



/* 5. String Splitter ------------------------------------------------------------------ */
function stringSplitter(string, delimiters) {
    //base case
    if (!delimiters.length){ 
        return string;
    }    
    //general case
    return string.split(delimiters[0]).map(element => stringSplitter(element, delimiters.slice(1)));
}
  
const date = '2/20/2020';
const res = stringSplitter(date, ['/']);
console.log(res);


/*
    input to program: ('02/20/2020', ['/'])
    output of the program: ['02', '20', '2020']
    input to each recursive call: ('02', []), ('20', []), ('2020', [])
    output of each recursive call:
        '02', '20', '2020'
-------------------------------------------------------------------------------------- */

