const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    Images:{type:String},
    address:{type:String},
    password:{type:String}
},{timestamps:true});

module.exports = mongoose.model('ussr',Userschema)