import React from "react";

const ListComponent = ({ index, content }) => {
  return (
    <li className="flex gap-1 mb-2">
      <span
        className="flex-shrink-0 size-4 md:size-5 text-xs md:text-sm rounded-full bg-[#ff9800]
       text-white flex items-center justify-center mr-4"
      >
        {index + 1}
      </span>
      <div className="text-sm md:text-md">{content}</div>
    </li>
  );
};

export default ListComponent;
