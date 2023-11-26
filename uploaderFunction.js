const fs = require('fs')
const cloudinary = require('./cloudinary')

const uploadImage = async ( filesToUpload ) => {

    const uploader = async (path) => await cloudinary.uploads(path, "brintschool")

        const urls = []
        const files = filesToUpload
        
        for (const file of files) {
            const { path } = file
            const newPath = await uploader(path)
            urls.push(newPath)
            fs.unlinkSync(path)
        }

        return urls
}


module.exports = {uploadImage}