// const { default: mongoose } = require("mongoose");

// let schema = new mongoose.Schema({
//     roll: { type: String, required: true, unique: true },
//     date_of_adm: { type: Date, default: Date.now },
//     marks: Number,
//     repeat: Boolean,
//     name: {
//         type: String,
//         required: true
//     }
// })
// let student = new mongoose.model("Student", schema)
// saveDoc = async() => {
//     let s1 = new student({
//         roll: "10",
//         name: "amit",
//         marks: "29",
//         repeat: false
//     })
//     await s1.save()
// }
// module.exports = saveDoc