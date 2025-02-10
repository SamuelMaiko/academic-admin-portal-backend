import { Textarea } from "keep-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CommentForm = ({ comment, setComment, work }) => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  return (
    <form onSubmit={() => {}} className="mt-[2rem] text-[14px] lg:text-[15px]">
      <div>
        <label htmlFor="">Comment</label>
        <Textarea
          disabled
          placeholder="Write your comment here."
          rows={8}
          className="mt-2 md:w-[60%] bg-blue-100 text-[14px] lg:text-[15px]"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
    </form>
  );
};

export default CommentForm;
