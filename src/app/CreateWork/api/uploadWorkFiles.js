import { toast } from "react-toastify";
import instance from "../../../axios/instance";

const uploadWorkFiles = async (workId, files) => {
    const formData = new FormData();
    if (files !=null){

    files.forEach(file => formData.append("files", file));

    try {
        const response = await instance.post(`/work/${workId}/upload-files/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (error) {
        toast.error("upload error")
        // console.error("Upload Error:", error.response?.data || error.message);
    }}
};

export default uploadWorkFiles;