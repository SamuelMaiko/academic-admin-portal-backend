import React, { useEffect, useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import NotificationCard from "./components/NotificationCard";
import Footer from "../Footer/page";
import notificationsPic from "../../assets/notifications.png";
import { toast } from "react-toastify";
import instance from "../../axios/instance";
import Loader from "../../SharedComponents/Loader";
import { useNotificationContext } from "../../Context/NotificationContext";

const Notifications = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const { setNotificationsCount } = useNotificationContext();

  const getNotifications = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/notifications/`);
      setNotifications(response.data);
      markAsRead();
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // getNotifications();
  }, []);
  const markAsRead = async () => {
    try {
      const response = await instance.post(
        `/notifications/read-all-notifications/`
      );

      // updating state to indicate read all by setting to 0
      setNotificationsCount((current) => ({
        ...current,
        notifications: 0,
      }));
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 500:
            toast.error(`Internal server error`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className={`relative w-full px-4 md:px-[2rem] dark:bg-darkMode-body`}>
      <div className="w-full md:w-[68%] h-full">
        <PageHeader
          title={"Notifications"}
          subTitle={"Stay updated with the latest notifications and alerts."}
        />
        <Loader loading={loading} />
        <div
          className={`${
            notifications.length == 0 || loading ? "hidden" : ""
          } rounded-lg min-h-screen pb-[7rem] dark:bg-darkMode-cardBg  mt-2  bg-neutral-50`}
        >
          {notifications &&
            notifications.map((item, index) => {
              return (
                <NotificationCard
                  key={index}
                  {...item}
                  notifications={notifications}
                  setNotifications={setNotifications}
                />
              );
            })}
        </div>
        <div
          className={`${
            notifications.length !== 0 || loading ? "hidden" : ""
          } min-h-screen dark:text-darkMode-text`}
        >
          <img
            className="w-[14rem] mx-auto h-auto"
            src={notificationsPic}
            alt=""
          />
          <p className="font-bold text-2xl text-center">
            No notifications yet!
          </p>
          <p className="font-medium text-sm text-center mt-2">
            Any new notifications will appear here.
          </p>
        </div>
        <div className="fixed top-[5rem] w-0 md:w-[21%] bg-blue-200 right-[2rem] hidden md:block z-40">
          <Footer side={true} />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
