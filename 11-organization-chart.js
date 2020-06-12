/* #11. Organization Chart ------------------------------------------------------------------ */

const employees = require('./employees.js')

function companyStructure(tree, i=0){
  return tree.reduce((output, employee) => {
    output += `${new Array(i).fill('\t').join('')}${employee.name}\n`
    
    if(employee.employees.length){
      output += companyStructure(employee.employees, i+1)
    }

    return output
  },'')
}

console.log(companyStructure(employees))


/*
    input to program: 
    output of the program:
    input to each recursive call: 
    output of each recursive call:
-------------------------------------------------------------------------------------- */

//node 11-organization-chart.js