const { response, request } = require('express');
const sharp = require('sharp');

const fs = require('fs')



const imagesGet = (req=  request,res=  response )=>{


}

const imagePost = async (req= request, res= response )=>{

    try {
        const imagen = req.file
       // console.log(imagen)
        const imageResized= await sharp(imagen.buffer)
                .resize(796, 1123,{
                     fit: 'contain',
                     background: "#fff"
                }).toBuffer()


        fs.writeFileSync(`uploads/${imagen.originalname}`, imageResized)
        res.json({ 
            status: 200,
            imageResized,
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