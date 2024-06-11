const mongoose=require("mongoose")

const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "roll":String,
        "admno":String,
        "college":String,
        "pass":String,
        "conf":String,
        "date":String,
        "parent":String,
        "email":String
    }
)



let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}