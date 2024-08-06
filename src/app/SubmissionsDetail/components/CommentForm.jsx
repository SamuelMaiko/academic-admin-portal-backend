import { Textarea } from "keep-react";
import React, { useState } from "react";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const CommentForm = ({ comment, setComment, work }) => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const updateComment = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await instance.put(`/submissions/${id}/edit/`, {
        work: work.id,
        message: comment,
      });
      toast.success("Saved");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;
        switch (status) {
          case 400:
            console.log(error.response.data);
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            toast.error(`Error: ${message}`);
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
    <form onSubmit={updateComment} className="mt-[2rem]">
      <div>
        <label htmlFor="">Comment</label>
        <Textarea
          placeholder="Write your comment here."
          rows={8}
          className="mt-2 md:w-[60%] bg-blue-100"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button
        className="bg-green-700 hover:bg-green-600 transition-colors duration-300 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer"
        type="submit"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default CommentForm;
