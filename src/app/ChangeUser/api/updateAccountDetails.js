import { toast } from "react-toastify";
import instance from "../../../axios/instance";

const updateAccountDetails = async (id, updatedData) => {
  try {
    const response = await instance.put(`/accounts/${id}/edit/`, updatedData);
    toast.success("Account updated successfully", { autoClose: 1000 });
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
        case 400:
          toast.error("Invalid data provided");
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

export default updateAccountDetails;
