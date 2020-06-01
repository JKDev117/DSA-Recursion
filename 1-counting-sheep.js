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