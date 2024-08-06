import React from "react";
import propTypes from "prop-types";
import { Badge, Divider } from "keep-react";

const WorkDetailBlock = ({ icon, detail }) => {
  return (
    <>
      <div className="flex gap-4 py-4 text-neutral-500 dark:text-darkMode-gray">
        <span>{icon}</span>
        <p>{detail}</p>
      </div>
    </>
  );
};

WorkDetailBlock.propTypes = {
  icon: propTypes.node.isRequired,
  detail: propTypes.node.isRequired,
};

export default WorkDetailBlock;
