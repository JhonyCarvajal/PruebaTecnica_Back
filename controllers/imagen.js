const { response, request } = require('express');
const sharp = require('sharp');

const fs = require('fs')



const imagesGet = (req=  request,res=  response )=>{


}

const imagePost = async (req= request, res= response )=>{

    try {
        
        const imagen = req.file
        const imageResized= await sharp(imagen.buffer).resize(796, 1123,{
            fit: 'contain',
            background: "#fff"
        }).toBuffer()


        fs.writeFileSync('uploads/prueba.png', imageResized)
        
        console.log(imageResized);
        res.json({ 
            imageResized,
            msg: `Hola mundo desde ImagePOst`
        })
    } catch (error) {
        
    }
   


}


module.exports = {
    imagesGet,
    imagePost
}