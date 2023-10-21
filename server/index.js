const express=require('express');
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const authetails =require("./router/auth")
const editor = require('./router/Updater')

dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then((data)=>{
    console.log('database connected');
}).catch((err)=>{
    console.log('error occured',err)
})


app.use(express.json());
app.use('/api',authetails);
app.use('/api/update',editor);


app.listen(8001,()=>{
    console.log('Port 8001 is connected');
})