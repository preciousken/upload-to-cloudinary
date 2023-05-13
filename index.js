const express = require('express');
const cors = require('cors')
const upload = require('./multer')
const fs = require('fs')
const cloudinary = require('./cloudinary')

const app = express();

app.use(cors())
app.use(express.json())

app.use("/upload-images", upload.array("image"),async(req,res)=>{

    const uploader = async (path) => await cloudinary.uploads(path,"images")

    if(req.method === "POST"){
        const urls = []
        const files = req.files

        
        for(const file of files){
            const {path} = file
            const newPath = await uploader(path)
            urls.push(newPath)
            fs.unlinkSync(path)
        }

        res.status(200).json({
            message:"Images Uploaded successfully",
            data: urls
        })
    }else{
        res.status(405).json({
            err:'Images not uploaded successfully'
        })
    }
})

app.get('/',async(req,res)=>{
    res.send('hello word')
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log('app listening on port'+port);
})