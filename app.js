const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {studentmodel}=require("./models/student")

const app  = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/studentsDB?retryWrites=true&w=majority&appName=Cluster0")


app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/contact",(req,res)=>{
    res.send("welcome to my contact list")
})

app.get("/search",(req,res)=>{
    res.send("welcome Search")
})

app.get("/delete",(req,res)=>{
    res.send("welcome dlete")
})

app.get("/view",(req,res)=>{
studentmodel.find().then((data)=>{
res.json(data)

}).catch((error)=>{
    res.json(error)
})
    
})

app.post("/add",(req,res)=>{
    let input=req.body
    let student=new studentmodel(input)
    student.save()
    console.log(student)

    res.json({status:"Success"})
})

app.listen(8080,()=>{
    console.log("server startted")
})