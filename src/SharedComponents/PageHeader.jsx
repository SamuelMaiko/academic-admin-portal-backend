import { Divider } from "keep-react";
import React from "react";
import PropTypes from "prop-types";
import { useStateShareContext } from "../Context/StateContext";

const PageHeader = ({ title, subTitle }) => {
  const { darkMode } = useStateShareContext();
  return (
    <>
      <h1 className="font-semibold dark:text-white text-[15px] md:text-lg py-3 pb-1 md:pb-5 md:py-5">
        {title}
      </h1>
      <p
        className={`dark:text-darkMode-gray text-[13px] md:text-sm text-[#676767] pl-3 mb-2 md:mb-4`}
      >
        {subTitle}
      </p>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default PageHeader;
