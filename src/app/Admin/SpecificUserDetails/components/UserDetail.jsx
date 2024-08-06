import React from "react";
import { Divider } from "keep-react";
import PropTypes from "prop-types";

const UserDetail = ({ title, value }) => {
  return (
    <>
      <p className="w-[60%] flex justify-between items-center h-[4rem]">
        <span className="font-semibold">{title}</span>
        <span>{value}</span>
      </p>
      <Divider />
    </>
  );
};

UserDetail.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default UserDetail;
