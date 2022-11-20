const {sum, subtract} = require("./calc")
const os = require("os");

console.log(os.freemem())

console.log(sum(3,4))
console.log(subtract(4,1))  