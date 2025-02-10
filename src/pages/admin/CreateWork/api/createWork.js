import { toast } from "react-toastify";
import instance from "../../../../axios/instance";

const createWork = async (data) => {
  try {
    const response = await instance.post("/work/create/", data);
    toast.success("Work created successfully");
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const status = error.response.status;
      console.log(error.response.data);

      switch (status) {
        case 500:
          toast.error("Internal server error");
          break;
        case 404:
          toast.error("Endpoint not found");
          break;
        case 401:
          toast.error("Unauthorized access");
          break;
        default:
          toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("An unexpected error occurred. Please try again later.");
    }
    return [];
  }
};

export default createWork;
