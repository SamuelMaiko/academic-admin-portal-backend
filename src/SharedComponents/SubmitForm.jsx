import { Textarea } from "keep-react";
import React from "react";
import { Info, Trash } from "phosphor-react";
import { useCallback, useState } from "react";
import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from "keep-react";
import folder from "../assets/folder.svg";
import instance from "../axios/instance";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useProgressBarContext } from "../Context/ProgressBarContext";

const SubmitForm = () => {
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();

  //

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleSubmitWork = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("message", comment);
    if ((file == null) & (comment == "")) {
      setError("Please provide a file and a comment.");
      toast.warning("Please provide a file and a comment.");
      setLoading(false);
    } else if (file == null) {
      setError("Please provide a file.");
      toast.warning("Please provide a file.");
      setLoading(false);
    } else if (comment == "") {
      toast.warning("Please provide a comment.");
      setError("Please provide a comment.");
      setLoading(false);
    } else {
      try {
        const response = await instance.post(`/work/${id}/submit/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success("Submitted successfully.");

        navigate(-1);
      } catch (error) {
        if (error.response && error.response.status) {
          const status = error.response.status;
          const message = error.response.data;

          switch (status) {
            case 400:
              setError("Please provide a comment.");
              toast.warning("Please provide a comment.");
              break;
            case 500:
              setError(`Server Error: ${message}`);
              toast.error("Internal Server Error.");
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
    }
  };

  return (
    <div className="w-full h-full bg-neutral-100 dark:bg-neutral-200 px-3 py-4">
      {error && <p className="text-red-500 hidden mt-3">{error}</p>}
      <h1 className="text-xl font-semibold text-center">Submit Work</h1>

      <div className="my-4">
        <Upload horizontal options={{ onDrop }}>
          <UploadBody className="dark:bg-darkMode-cardBg hover:dark:bg-darkMode-cardHover">
            <UploadIcon>
              <img src={folder} alt="folder" />
            </UploadIcon>
            <UploadText className="">
              <p className="text-body-3 font-medium text-metal-600 dark:text-white">
                Choose File to Upload
              </p>
              <p className="text-body-4 font-normal text-metal-400 dark:text-sidebartext-hover">
                PDF and JPG formats
              </p>
            </UploadText>
          </UploadBody>
          <UploadFooter isFileExists={file != null}>
            <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600 dark:text-metal-300">
              <Info size={16} />
              Uploaded File
            </p>
            <ul className="space-y-1">
              {file != null ? (
                <li
                  key={file?.name}
                  className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600 dark:bg-metal-800 dark:text-metal-300 "
                >
                  {file?.name}
                  <Trash
                    onClick={() => setFile(null)}
                    size={17}
                    className="cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-300"
                  />
                </li>
              ) : (
                <span></span>
              )}
            </ul>
          </UploadFooter>
        </Upload>
      </div>

      <div>
        <label htmlFor="comment">Comment</label>
        <Textarea
          id="comment"
          placeholder="Write your comment here."
          rows={8}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <input
        onClick={handleSubmitWork}
        className="bg-green-700 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer"
        type="button"
        value={loading ? "Submitting..." : "Submit"}
        disabled={loading}
      />
    </div>
  );
};

export default SubmitForm;
