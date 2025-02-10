import { toast } from "react-toastify";
import instance from "../../../../axios/instance";

const createUser = async (userData) => {
  try {
    const response = await instance.post("/accounts/create/", userData);

    toast.success("User created successfully", { autoClose: 2000 });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const status = error.response.status;

      switch (status) {
        case 400:
          toast.error("Invalid input. Please check your details.");
          break;
        case 409:
          toast.error("User with this email already exists.");
          break;
        case 500:
          toast.error("Internal server error.");
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

export default createUser;
