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