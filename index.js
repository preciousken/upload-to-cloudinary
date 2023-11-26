const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())



const upload = require('./multer')
const { uploadImage } = require('./uploaderFunction');
const { configData } = require('./config');


//  NOTE: anywhere you see pcare, change it to the name images coming from the client is assigned.
app.post('/upload', upload.array("images"), async (req, res) => {
    const urls = await uploadImage(req.files)
    // write your code that makes use of the images
    console.log(urls) //e.g [{url: 'http://res.cloudinary.com/staunchngdev/image/upload/v1701015158/brintschool/axprgmmtxpqsd8xdchaz.png',id: 'brintschool/axprgmmtxpqsd8xdchaz'}]

})





const port = configData.PORT || 5000
app.listen(port, () => {
    console.log('app listening on port ' + port);
})