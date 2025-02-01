import { toast } from "react-toastify";
import instance from "../../../axios/instance";

const deleteWorkFile = async (fileId) => {
  try {
    const response = await instance.delete(
      `/work/work-files/${fileId}/delete/`
    );

    toast.success("File deleted successfully", { autoClose: 2000 });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const status = error.response.status;

      switch (status) {
        case 500:
          toast.error("Internal server error", { autoClose: 2000 });
          break;
        case 404:
          toast.error("File not found", { autoClose: 2000 });
          break;
        case 401:
          toast.error("Unauthorized access", { autoClose: 2000 });
          break;
        default:
          toast.error("An error occurred. Please try again.", {
            autoClose: 2000,
          });
      }
    } else {
      toast.error("An unexpected error occurred. Please try again later.", {
        autoClose: 2000,
      });
    }
    return null;
  }
};

export default deleteWorkFile;
