const multer = require('multer');

// storage engine

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/')
    },

    filename:function(req,file,cb){
        cb(null, Date.now() +"-"+file.originalname)
    }
})

// file validation
const fileFilter = (req,file,cb) => {

console.log(file.mimetype)
if(
    file.mimetype === "image/jpeg" || 
    file.mimetype === "image/png" || 
    file.mimetype === "application/pdf" ||
    file.mimetype === "audio/mpeg"){
    cb(null, true)
}
else{
    // prevent the upload
    cb({message: "unsupported file format"}, false)
}
}


const upload = multer({
    storage: storage,
    // limits: {fileSize: 1024 * 1024},  //for limiting the fileSize
    fileFilter: fileFilter
})


module.exports = upload;