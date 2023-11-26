const cloudinary = require('cloudinary');
const { configData } = require('./config');


// Configuration 
cloudinary.config({
    cloud_name: configData.CLOUDINARY_CLOUD_NAME,
    api_key: configData.CLOUDINARY_API_KEY,
    api_secret: configData.CLOUDINARY_API_SECRET,
});

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}