const { response, request } = require('express');
const sharp = require('sharp');

var cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL)

const Imagene = require('../models/imagene');
const { Op, and } = require("sequelize");
const fs = require('fs')


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

        const url = secure_url
        const ImagenAgregada = await Imagene.findOrCreate({
            where: {
                [Op.or]: [
                    {url}
                ]
            },
            defaults: {
                url
            }
        })
        res.json({ 
            status: 201,
            data: url,
            msg: `Imagen Agregada`
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