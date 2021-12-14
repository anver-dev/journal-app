import axios from "axios";

const uploadImage = async (file) => {
  if (!file) return;
  try {
    const formData = new FormData();

    formData.append("upload_preset", "vue-test");
    formData.append("file", file);

    const URL = "https://api.cloudinary.com/v1_1/dwu9yxops/image/upload";

    const { data } = await axios.post(URL, formData);

    console.log(data);

    return data.secure_url;
  } catch (error) {
    console.error("Error al cargar la imagen, revisar los logs");
    console.log(error);
    return null;
  }
};

export default uploadImage;
