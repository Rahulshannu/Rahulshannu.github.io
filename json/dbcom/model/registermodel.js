const { default: mongoose } = require("mongoose");
// var email = document.getElementById("usern").value();
// var pass = document.getElementById("passd").value();
// var cpass = document.getElementById("cpd").value();

let schema = new mongoose.Schema({
    email: {type : String, require:true},
    password: {type : String, require:true},
    cpass : {type:String, require:true}
})

let webd= new mongoose.model("web",schema)
saveDoc = async ()=>{
    let u1 = new webd({
        email : "rahul@m",
        pass : "786",
        cpass : "34b",

        repeat:false
    
    })
    await u1.save()
}
  module.exports=saveDoc