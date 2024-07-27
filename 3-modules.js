// CommonJS, every file is module (by default)
// Modules- Encapsulated Code (only share minimum)
const names = require('./4-names')// it import the object, which is exported by some file
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') //here we import whole file so all file run here 
console.log(data);
sayHi('sus an')
sayHi(names.john)
sayHi(names.peter)
