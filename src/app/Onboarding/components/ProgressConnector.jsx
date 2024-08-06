import React from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const ProgressConnector = ({ className }) => {
  return (
    <p
      className={twMerge(
        "h-[0.1rem] bg-blue-500 w-[10rem] hidden md:block ",
        className
      )}
    ></p>
  );
};

ProgressConnector.propTypes = {
  className: PropTypes.string,
};

export default ProgressConnector;
