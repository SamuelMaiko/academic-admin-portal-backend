import React from "react";
import StateContext from "./StateContext";
import ProgressBarContext from "./ProgressBarContext";
import NotificationContext from "./NotificationContext";
import AdminContext from "./AdminContext";

const ContextWrapper = ({ children }) => {
  return (
    <StateContext>
      <ProgressBarContext>
        <NotificationContext>
          <AdminContext>{children}</AdminContext>
        </NotificationContext>
      </ProgressBarContext>
    </StateContext>
  );
};

export default ContextWrapper;
