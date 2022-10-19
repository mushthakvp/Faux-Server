const  cloudinary = require('cloudinary');


cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });


  const  cloudinaryUploadImg= async (fileTOUpload)=>{
    try {
        const data = await cloudinary.uploader.upload(fileTOUpload, {
            resource_type:"auto",
        });

            return {
                url: data?.secure_url,
            }

    } catch (error) {
        return error;
    }
  };

  module.exports=cloudinaryUploadImg;