import React, { useEffect, useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import { Textarea } from "keep-react";
import FileLink from "../WorkDetail/components/FileLink";
import { Trash2 } from "lucide-react";
import instance from "../../axios/instance";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import CommentForm from "./components/CommentForm";
import FileForm from "./components/FileForm";
import DeleteFileButton from "./components/DeleteFileButton";

const SubmissionsDetail = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const getSubmissionDetails = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/submissions/${id}`);
      setDetails(response.data);
      setComment(response.data.message);
      setFile(response.data.file);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
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

  useEffect(() => {
    getSubmissionDetails();
  }, []);

  return (
    <div className="w-full px-[2rem] pb-[44%] md:pb-[5rem] dark:bg-darkMode-body ">
      <PageHeader
        title={"Submission Details"}
        subTitle={"View all the details of a submission."}
      />
      <div>
        {/* comment form */}
        <CommentForm
          comment={comment}
          setComment={setComment}
          work={details.work}
        />
        <div className="flex flex-col gap-5 mt-[3rem] ">
          <h3 className="font-medium ">File</h3>
          <div className={`flex gap-8 ${!file ? "hidden" : ""} md:w-fit`}>
            {file && (
              <FileLink
                file_name={file && file.split("/").at(-1)}
                download_url={details.file_download_link}
              />
            )}
            <DeleteFileButton work={details.work} setFile={setFile} />
          </div>
          {/* file upload form */}
          <FileForm
            file={file}
            setFile={setFile}
            work={details.work}
            setDetails={setDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default SubmissionsDetail;
