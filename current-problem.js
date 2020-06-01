/* #. name of exercise ------------------------------------------------------------------ */





/*
    input to program: 
    output of the program: 
        [Output]
    input to each recursive call: 
    output of each recursive call:
-------------------------------------------------------------------------------------- */




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




