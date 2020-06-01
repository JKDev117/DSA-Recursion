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

//node 5-string-splitter.js