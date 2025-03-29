var a=94884;
var b=98484;
console.log(a+b)

setTimeout(()=>{
    console.log("h1")
},0)

console.log(a+b)

console.log(a+b)
setTimeout(()=>{
    console.log("h1")
},3300)
setTimeout(()=>{
    console.log("h1")
},5000)


// if GEC is removed and then only Libuv library sends the response of setTimeout to call stack and v8 engine executes 