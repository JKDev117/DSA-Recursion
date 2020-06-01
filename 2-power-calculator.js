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

//node 2-power-calculator.js