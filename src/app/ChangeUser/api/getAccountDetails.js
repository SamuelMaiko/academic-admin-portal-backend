import { toast } from "react-toastify";
import instance from "../../../axios/instance";

const getAccountDetails = async (id) => {
  try {
    const response = await instance.get(`/accounts/${id}/`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const status = error.response.status;

      switch (status) {
        case 500:
          toast.error("Internal server error");
          break;
        case 404:
          toast.error("Account not found");
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
    return {};
  }
};

export default getAccountDetails;
