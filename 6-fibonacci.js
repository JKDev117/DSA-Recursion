/* 6. Fibonacci ------------------------------------------------------------------ */
function fibonacci(n){
    //base case
    if(n === 1){
        return [n]
    }
    if(n === 2){
        let a = fibonacci(n-1)
        a.push(n-1)
        return a;
    }    
    //general case    
    let a = fibonacci(n-1);
    a.push(a[a.length-1]+a[a.length-2])
    return a;
}

for(let i=1; i<=7; i++){
    console.log(fibonacci(i))
}

/*
    input to program: 3
    output of the program: [1, 1, 2] 
    input to each recursive call: 2, 1 
    output of each recursive call: [1, 1], [1]
-------------------------------------------------------------------------------------- */


