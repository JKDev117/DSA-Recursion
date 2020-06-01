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