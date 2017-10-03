const fs = require('fs')
var find = fs.readFileSync(process.argv[2])
let stringFind =find.toString()
let splitFind = splitFind.split('\n')

console.log(splitFind.length - 1)
    
// for(var i = 0; i < fs.length; i++){
// let add = fs.split()
// }
//fs.readFileSync('/path/to/file')
//console.log(process.argv[0])
//console.log(fs.readFileSync(process.argv[2]))