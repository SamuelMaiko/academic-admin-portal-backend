import { ArrowRight } from "phosphor-react";
import React from "react";
import PropTypes from "prop-types";

const SettingsBlock = ({ title, onClick = () => {} }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex justify-between items-center p-3 cursor-pointer hover:bg-neutral-200
         transition-colors duration-300 dark:hover:bg-darkMode-cardHover"
      >
        <p
          className={`${
            title == "Sign Out" ? "text-red-500 dark:text-red-400" : ""
          }`}
        >
          {title}
        </p>
        <p>
          <ArrowRight size={21} />
        </p>
      </div>
    </>
  );
};

SettingsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SettingsBlock;
