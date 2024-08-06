import React from "react";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import folder from "../../../assets/folder.svg";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../../axios/instance";
import { File, Image, SendHorizontal } from "lucide-react";

const SubmitMessage = ({
  file,
  setFile,
  image,
  setImage,
  revisionMessages,
  setRevisionMessages,
  messageEndRef,
  setDeleting,
}) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();

  const handleSubmitMessage = async () => {
    setDeleting(false);
    setLoading(true);

    const formData = new FormData();
    if (file) formData.append("file", file);
    if (image) formData.append("image", image);
    formData.append("message", message);

    try {
      const response = await instance.post(
        `/revisions/${id}/send-message/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("");
      setFile(null);
      setImage(null);
      // updating state to reflect the sent message
      setRevisionMessages((current) => {
        const updatedMessages = [...current, response.data];

        return updatedMessages.map((message) =>
          !message.is_read && !message.is_mine
            ? { ...message, is_read: true }
            : message
        );
      });
      // navigate(-1);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 400:
            toast.error("Send failed.", message.error);
            console.log("Send failed.", message);
            break;
          case 500:
            toast.error(`Server Error: ${message}`);
            break;
          default:
            setError(`Error: ${message}`);
            break;
        }
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      // setImage(URL.createObjectURL(selectedFile));
      setImage(selectedFile);
    } else {
      alert("Please select a valid image file");
    }
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="flex justify-between gap-4 items-end h-full pb-2">
      <div
        className={`${
          file != null ? "hidden" : ""
        } flex items-center cursor-pointer`}
      >
        <label
          onClick={() => setFile(null)}
          htmlFor="image-upload"
          className="flex items-center cursor-pointer"
        >
          <Image className="text-gray-600 dark:text-white mb-4" size={24} />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleImageChange(e);
            e.target.value = "";
          }}
          className="hidden"
        />
      </div>
      <div
        className={`flex items-center cursor-pointer ${
          image != null ? "hidden" : ""
        }`}
      >
        <label
          onClick={() => setImage(null)}
          htmlFor="file-upload"
          className="flex items-center cursor-pointer"
        >
          <File className="text-gray-600 dark:text-white mb-4" size={24} />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={(e) => {
            handleFileChange(e);
            e.target.value = "";
          }}
          className="hidden"
        />
      </div>

      <div className="flex-1">
        {/* <label htmlFor="message">Message</label> */}
        <TextareaAutosize
          id="message"
          placeholder="Write your message here."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none
           focus:ring-2  resize-none"
          minRows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmitMessage}
        className={`${
          message === "" && file === null && image === null
            ? "bg-gray-500"
            : "bg-blue-700"
        }  rounded-full text-white flex items-center cursor-pointer p-4`}
        disabled={
          loading || (message === "" && file === null && image === null)
        }
      >
        <SendHorizontal size={25} />
      </button>
    </div>
    // </div>
  );
};

export default SubmitMessage;
