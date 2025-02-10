import React from "react";
import PropTypes from "prop-types";

const ContactInfoDetail = ({ icon, title, detail }) => {
  return (
    <div className="flex gap-3 mb-3">
      <span>{icon}</span>
      <div>
        <p className="font-semibold text-[15px]">{title}</p>
        {title == "Phone" || title == "Email" ? (
          <p className="text-sm text-neutral-400">{detail}</p>
        ) : detail !== "Not available" ? (
          <a
            href={detail}
            target="_blank"
            className="text-sm text-blue-500 hover:text-blue-700 underline"
          >
            {detail}
          </a>
        ) : (
          <p className="text-sm text-neutral-400">{detail}</p>
        )}
      </div>
    </div>
  );
};

ContactInfoDetail.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string,
};

export default ContactInfoDetail;
