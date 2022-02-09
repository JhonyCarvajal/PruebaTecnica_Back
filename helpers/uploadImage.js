



const UploadImageCloud = async (file) => {

  if (!file) return;

  console.log( {data: file})

  try {
   /* const formData = new FormData();
    formData.append("upload_preset", "pruebaProteccion");
    formData.append("file", file);

    const url = "https://api.cloudinary.com/v1_1/dvemhefxt/image/upload";
    const {data} = await axios.post(url,formData)
    console.log(data)*/

    

    console.log(data)

    return data.secure_url

  } catch (error) {
    console.log("Error al cargar la imagen");
    console.log(error);
    return null;
  }
};


module.exports= {
  UploadImageCloud
}