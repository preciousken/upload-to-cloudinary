const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

app.get('/',async(req,res)=>{
    res.send('hello word')
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log('app listening on port'+port);
})