import { Divider } from "keep-react";
import React from "react";
import PropTypes from "prop-types";
import { useStateShareContext } from "../Context/StateContext";

const PageHeader = ({ title, subTitle }) => {
  const { darkMode } = useStateShareContext();
  return (
    <>
      <h1 className="font-semibold dark:text-white text-lg py-5">{title}</h1>
      <p className={`dark:text-darkMode-gray text-sm text-[#676767] pl-3 mb-4`}>
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
