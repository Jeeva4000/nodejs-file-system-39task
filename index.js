const express = require("express")
const fs = require("fs")
const path = require("path")
// const dirPath = path.join
const dirName = path.join(__dirname,"timeStamps")

// step 1 intialize frame work
const app=express()

// routes
app.get("/", (req,res)=>{
    res.send("Hi Im jeeva😊")
})

app.get("/date-time",(req,res)=>{
    let date = new Date()
    let currentTimeStamp=date.toUTCString().slice(0,-3)
    // res.send(currentTimeStamp)
    let content = `The last updated timestamp:${currentTimeStamp}`
    let changedTime = currentTimeStamp.split(" ").join("").split(",").join("").split(":").join("");
    console.log(dirName)
    fs.writeFile(`${dirName}/${changedTime}.txt`,content,(err)=>{
        if(err){
            res.send("Error in writing the file")
            return
        }
        res.sendFile(path.join(dirName,"date-time.txt"))
    })
}) 

// step 2 listing the server
app.listen(9006,()=>console.log(`server running localhost:9006`)) 