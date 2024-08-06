import React from "react";

const hourMinute = (datetimeString) => {
  // Create a Date object
  const date = new Date(datetimeString);

  // Extract the hours and minutes
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format the hours and minutes to ensure two digits
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Combine hours and minutes into the desired format
  const timeString = `${formattedHours}:${formattedMinutes}`;
  return timeString;
};

export default hourMinute;
