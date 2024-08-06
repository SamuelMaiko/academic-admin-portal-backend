import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useParams } from "react-router-dom";

const DeleteFileButton = ({ work, setFile }) => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleDeleteFile = async () => {
    setLoading(true);
    try {
      const response = await instance.put(`/submissions/${id}/edit/`, {
        work: work.id,
        file: null,
      });
      //   updating  state to remove file
      setFile(null);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 400:
            console.log(message);
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            toast.error(`Error: ${message.error}`);
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
      onClick={handleDeleteFile}
      className="text-red-500 hover:text-red-700 transition-colors duration-300 cursor-pointer h-full"
      disabled={loading}
    >
      <Trash2 size={20} />
    </button>
  );
};

export default DeleteFileButton;
