import { toast } from "react-toastify";
import instance from "../../../axios/instance";

const claimWork = async (id) => {
  try {
    const response = await instance.post(`/submissions/${id}/claim/`);
    toast.success("Work claimed successfully", { autoClose: 2000 });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const status = error.response.status;

      switch (status) {
        case 500:
          toast.error("Internal server error");
          break;
        case 404:
          toast.error("Submission not found");
          break;
        case 401:
          toast.error("Unauthorized access");
          break;
        case 400:
          toast.error("Unable to claim this work");
          break;
        default:
          toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("An unexpected error occurred. Please try again later.");
    }
    return null;
  }
};

export default claimWork;
