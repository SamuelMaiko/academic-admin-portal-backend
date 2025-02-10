import { toast } from "react-toastify";
import instance from "../../../../axios/instance";

const uploadWorkImages = async (workId, images) => {
  const formData = new FormData();
  if (images != null) {
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await instance.post(
        `/work/${workId}/upload-images/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Images uploaded successfully.");
      return response.data;
    } catch (error) {
      toast.error("upload error");
      // console.error("Upload Error:", error.response?.data || error.message);
    }
  }
};

export default uploadWorkImages;
