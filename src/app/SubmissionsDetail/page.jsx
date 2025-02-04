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
import getSubmissionDetails from "./api/getSubmissionDetails";
import Loader from "../../SharedComponents/Loader";

const SubmissionsDetail = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("Hello there this is me here");
  const [submissionDetails, setSubmissionDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // getSubmissionDetails();
    getSubmissionDetails(id).then((data) => {
      setLoading(true);
      setComment(data.message);
      setFile({
        file_name: data.file,
        file_download_link: data.file_download_link,
      });

      setSubmissionDetails(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="relative w-full px-[2rem] pb-[44%] md:pb-[5rem] h-[80vh] dark:bg-darkMode-body ">
      <PageHeader
        title={"Submission Details"}
        subTitle={"View the details of a submission."}
      />
      <div>
        {/* comment form */}
        <p className="my-2 font-semibold text-lg">
          {submissionDetails.work.work_code}
        </p>
        <CommentForm
          comment={comment}
          setComment={setComment}
          work={submissionDetails.work}
        />
        <div className="flex flex-col gap-5 mt-[3rem] ">
          <h3 className="font-medium ">File</h3>
          <div
            className={`flex gap-8 ${
              file ? "" : "hidden"
            } md:w-fit items-center`}
          >
            {file && (
              <FileLink
                file_name={file && file.file_name.split("/").at(-1)}
                download_url={file.file_download_link}
              />
            )}
          </div>
        </div>
      </div>
      {/* loader of the page */}
      <div
        className={`absolute bg-[rgba(255,255,255,0.9)] inset-0 h-[80vh] bottom-0 flex flex-col items-center justify-center
        ${loading ? "" : "hidden"}
        `}
      >
        <Loader loading={loading} />
        <h1 className="font-semibold">Loading ...</h1>
      </div>
    </div>
  );
};

export default SubmissionsDetail;
