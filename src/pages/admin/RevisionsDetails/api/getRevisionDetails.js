import { toast } from "react-toastify";
import instance from "../../../../axios/instance";

const getRevisionDetails = async (revisionId) => {
  try {
    const response = await instance.get(`/revisions/${revisionId}/`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const status = error.response.status;

      switch (status) {
        case 500:
          toast.error("Internal server error");
          break;
        case 404:
          toast.error("Revision not found");
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
    return null;
  }
};

export default getRevisionDetails;
