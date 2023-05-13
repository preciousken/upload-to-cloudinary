const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())



const upload = require('./multer')
const { uploadImage } = require('./uploaderFunction');


//  NOTE: anywhere you see pcare, change it to the name images coming from the client is assigned.
app.post('/upload', upload.array("pcare"), async (req, res) => {

    const urls = await uploadImage(req.files)
    // write your code that makes use of the images

})





const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('app listening on port ' + port);
})