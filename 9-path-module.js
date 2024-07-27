const { log } = require('console')
const path=require('path')

console.log(path.sep) // its returns the platform specific separtor 
//for our platfrom separator is '\'.


// join the given string as path
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

//give the base of path
const base = path.basename(filePath)
console.log(base) 

//give absolute path of text.txt
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)