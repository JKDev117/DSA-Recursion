/* #. name of exercise ------------------------------------------------------------------ */





/*
    input to program: 
    output of the program: 
    input to each recursive call: 
    output of each recursive call:
-------------------------------------------------------------------------------------- */

function factorial(n){
    //base case
    if(n===1){
        return n;
    }
    //general case
    return n * factorial(n-1)
}


console.log(factorial(5))

    

