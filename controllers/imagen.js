const { response, request } = require('express');


const imagesGet = ( request, response )=>{


}

const imagePost = ( request, response )=>{

    response.json({ 
        msg: `Hola mundo desde ImagePOst`
    })
   


}


module.exports = {
    imagesGet,
    imagePost
}