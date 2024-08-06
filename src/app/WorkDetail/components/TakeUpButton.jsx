import React, { useState } from "react";
import instance from "../../../axios/instance";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const TakeUpButton = ({ hasWriter, setWorkDetails }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleTakeUpWork = async () => {
    setLoading(true);
    try {
      const response = await instance.post(`/work/${id}/uptake/`);
      setWorkDetails((current) => ({
        ...current,
        is_mine: true,
        has_writer: true,
        status: "In Progress",
      }));
      toast.success("Work added to your uptaken work.");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 400:
            toast.error(message);
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            console.log(`Error: ${message}`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={handleTakeUpWork}
      className={`${
        !hasWriter ? "" : "hidden"
      } bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white
               rounded-lg text-sm py-1 px-3 ml-2 w-[6rem] md:w-fit md:ml-8 whitespace-nowrap`}
      disabled={loading}
    >
      {loading ? "loading..." : "Take Up"}
    </button>
  );
};

export default TakeUpButton;
