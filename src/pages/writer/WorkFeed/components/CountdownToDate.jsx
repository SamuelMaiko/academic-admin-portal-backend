import React from "react";
import Countdown from "react-countdown";

const CountdownToDate = ({ deadline }) => {
  const targetDate = new Date(deadline);

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <span className="text-red-500 dark:text-red-400 font-medium text-sm whitespace-nowrap">
          deadline reached
        </span>
      );
    } else {
      const isLessThan8Hours = days === 0 && hours < 8;
      // Render a countdown
      return (
        <span
          className={`${
            isLessThan8Hours ? "text-red-500 dark:text-red-400" : ""
          } text-sm font-medium my-2 text-green-500 dark:text-green-400 mb-2 font-opensans`}
        >
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };
  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownToDate;
