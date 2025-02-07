import React from "react";
import moment from "moment";

const relativeTime = (dateString) => {
  const relativeT = moment(dateString).fromNow();

  return relativeT;
};

export default relativeTime;
