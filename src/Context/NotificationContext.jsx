import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import instance from "../axios/instance";

const createdNotifContext = createContext();
export const useNotificationContext = () => useContext(createdNotifContext);

const NotificationContext = ({ children }) => {
  // getting the notification COUNT
  const [notificationsCount, setNotificationsCount] = useState({});

  const getNotificationsCount = async () => {
    try {
      const response = await instance.get(
        `/notifications/unread-notifications-count/`
      );
      setNotificationsCount(response.data);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            toast.error(`Error: ${message}`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <createdNotifContext.Provider
      value={{
        notificationsCount,
        setNotificationsCount,
        getNotificationsCount,
      }}
    >
      {children}
    </createdNotifContext.Provider>
  );
};

NotificationContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NotificationContext;
