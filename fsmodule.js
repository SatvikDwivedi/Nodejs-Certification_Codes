const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })


// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

console.log("finished reading")
// fs.writeFile('file.txt', "this is another file", ()=>{
//     console.log("finished reading file")
// })

const b = fs.writeFileSync('file2.txt', "this is a file 2")
console.log(b)
