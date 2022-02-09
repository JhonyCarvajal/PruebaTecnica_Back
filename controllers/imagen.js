const { response, request } = require('express');
const sharp = require('sharp');

var cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL)

const fs = require('fs')

//const {UploadImageCloud} = require ("../helpers/uploadImage")



const imagesGet = (req=  request,res=  response )=>{


}

const imagePost = async (req= request, res= response )=>{
    try {
        const imagen = req.file
      
        const imageResized= await sharp(imagen.buffer)
                .resize(796, 1123,{
                     fit: 'contain',
                     background: "#fff"
                }).toBuffer()



        await fs.writeFileSync(`uploads/${imagen.originalname}`, imageResized)

        const {secure_url} = await cloudinary.uploader.upload(`uploads/${imagen.originalname}`)

        console.log(secure_url)
        
        //console.log(imgFolder)*/

        res.json({ 
            status: 200,
            data: secure_url,
            msg: `Hola mundo desde ImagePOst`
        })
    } catch (error) {
        res.json({ 
            status: 400,
            msg: `Error ${error}`
        })
    }
   


}


module.exports = {
    imagesGet,
    imagePost
}