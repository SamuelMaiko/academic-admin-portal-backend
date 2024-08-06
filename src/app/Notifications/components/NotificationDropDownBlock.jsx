import React from "react";
import PropTypes from "prop-types";
import { Divider } from "keep-react";

const NotificationDropDownBlock = ({ onClick = () => {}, icon, text }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex p-2 py-[11px] items-center hover:bg-neutral-100 font-medium
      dark:hover:bg-darkMode-cardBg transition-colors duration-300"
      >
        <div className="w-[2rem] ">{icon}</div>
        <p className="w-full text-sm">{text}</p>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
    </>
  );
};

NotificationDropDownBlock.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default NotificationDropDownBlock;
