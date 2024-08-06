import React from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const ProgressCounter = ({ number, className, title }) => {
  return (
    <div
      className={twMerge(
        "size-[1.5rem] md:size-[2.1rem] bg-blue-500 text-white rounded-full flex items-center justify-center font-medium relative ",
        className
      )}
    >
      {number}

      {/* ____________ text */}
      <div className="absolute -bottom-8 text-black font-normal whitespace-nowrap text-xs md:text-base">
        {title}
      </div>
    </div>
  );
};

ProgressCounter.propTypes = {
  number: PropTypes.number.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ProgressCounter;
