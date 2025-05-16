require("./abc.js")
var obj=require("./Calculate")
var a=20;
var b=30;
var x=100
console.log(obj.x)
console.log(x)
console.log(obj.calculate(a,b))
// console.log(global)
// console.log(globalThis)
console.log(module.exports) // empty object
