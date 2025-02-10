import React, { useRef, useState } from "react";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const FileForm = ({ file, setFile, work, setDetails }) => {
  const [uploadFile, setUploadFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const myInputRef = useRef(null);
  const { id } = useParams();

  const handleSubmitFile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("work", work.id);

    if (uploadFile) {
      setLoading(true);
      try {
        const response = await instance.put(
          `/submissions/${id}/edit/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setDetails(response.data);
        setFile(uploadFile.name);
        setUploadFile(null);

        myInputRef.current.value = "";
      } catch (error) {
        if (error.response && error.response.status) {
          const status = error.response.status;
          const message = error.response.data;

          switch (status) {
            case 400:
              console.log(message);
              toast.error("400");
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
    }
  };

  return (
    <form onSubmit={handleSubmitFile} className={`${file ? "hidden" : ""}`}>
      <p className="text-gray-500 mb-2">No file.</p>
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <input
          ref={myInputRef}
          id="picture"
          type="file"
          onChange={(e) => {
            setUploadFile(e.target.files[0]);
          }}
          className="flex h-10 w-full rounded-md border border-input bg-blue-100 px-3 py-2 text-sm
                 text-gray-400 file:border-0 file:bg-white file:text-gray-600 file:text-sm file:font-medium"
        />
      </div>
      <button
        className={` transition-colors duration-300 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem]  ${
        loading || !uploadFile
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-blue-700 hover:bg-blue-600 cursor-pointer"
      }`}
        type="submit"
        value=""
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
};

export default FileForm;
