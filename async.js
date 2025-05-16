const fs=require("fs")
const https=require("https")

var a= 383984983;
var b=9439498;
console.log("hellow world this is how asynchronous will work")
https.get("https://dummyjson.com/products",(res)=>{
    console.log("response and data fetched succesfully")
})
setTimeout(()=>{
    console.log("this is settimeout")
},5000)
fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("filedata",data)
})

//these are async func and execute in async way