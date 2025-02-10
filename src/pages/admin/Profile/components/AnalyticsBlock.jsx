import React from "react";
import PropTypes from "prop-types";

const AnalyticsBlock = ({ icon, title, detail }) => {
  return (
    <div className="flex gap-3 mb-3">
      <span>{icon}</span>
      <div>
        <p className="font-semibold text-[15px]">{title}</p>
        <p className="text-sm text-neutral-700 dark:text-darkMode-gray">
          {detail}
        </p>
      </div>
    </div>
  );
};

AnalyticsBlock.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default AnalyticsBlock;
