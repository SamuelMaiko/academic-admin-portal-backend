import { DotsThree, Pen, Trash } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Home/components/ui/Button";
import { Divider } from "keep-react";
import PropTypes from "prop-types";
import NotificationDropDownBlock from "./NotificationDropDownBlock";
import Document from "../../../assets/notifications/Document.png";
import System from "../../../assets/notifications/System.png";
import AlarmClock from "../../../assets/notifications/alarm-clock.svg";
import Transfer from "../../../assets/notifications/Transfer.png";
import Revision from "../../../assets/notifications/Revision.avif";
import { CalendarDays, FileSearch, TextSearch, UserCog } from "lucide-react";
import formatDate from "../../Home/components/datetime/formatDate";
import relativeTime from "../../Home/components/datetime/RelativeTime";
import { useNavigate } from "react-router-dom";
import CountdownToDate from "../../Home/components/CountdownToDate";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";

const NotificationCard = ({
  id,
  is_read,
  type,
  message,
  work,
  triggered_by,
  created_at,
  notifications,
  setNotifications,
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState();

  const handleDeleteNotification = async () => {
    setLoading(true);
    try {
      // closing the dropdown
      setDropDownOpen(false);

      const response = await instance.delete(`/notifications/${id}/delete/`);
      //   updating  state to remove notification
      const updatedNotifications = notifications.filter(
        (item) => item.id != id
      );
      setNotifications(updatedNotifications);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 400:
            console.log(message);
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            toast.error(`Error: ${message.error}`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const dropdownRef = useRef(null);
  // Handling dropdown visibility
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`flex relative w-full gap-2 p-5 pr-3 ${
          !is_read
            ? "bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 hover:dark:bg-blue-800"
            : "hover:bg-lightmode-cardBgHover dark:bg-darkMode-cardBg hover:dark:bg-darkMode-cardHover"
        }  cursor-pointer transition-colors duration-300  dark:text-darkMode-cardText
        
        `}
      >
        <div className="relative">
          {/* notification icon */}
          <div className="size-[3.1rem] rounded-full bg-white overflow-hidden grid place-items-center">
            {/* the admin profile */}
            <img
              className={`${
                type == "Assigned Work" ? "" : "hidden"
              } h-[90%] w-[90%] object-cover object-center`}
              src={Document}
              alt="document image"
            />
            <img
              className={`${
                type == "System Notification" ? "" : "hidden"
              } h-[70%] w-[70%] object-cover object-center`}
              src={System}
              alt="system image"
            />
            <img
              className={`${
                type == "Nearing Deadline" ? "" : "hidden"
              } h-[67%] w-[67%] object-cover object-center`}
              src={AlarmClock}
              alt="alarm image"
            />
            <img
              className={`${
                type == "ReAssigned Work" ? "" : "hidden"
              } h-[70%] w-[70%] object-cover object-center`}
              src={Transfer}
              alt="transfer image"
            />
            <img
              className={`${
                type == "New Revision" ? "" : "hidden"
              } h-[100%] w-[100%] object-cover object-top`}
              src={Revision}
              alt="revisiion image"
            />
          </div>
          {/* is not read blue dot */}
          <div
            className={`${
              !is_read ? "" : "hidden"
            } absolute -left-[0.7rem] top-1/2 -translate-x-1/2 bg-blue-500 size-[0.5rem] rounded-full `}
          ></div>
        </div>
        <div className="text-sm w-[78%]">
          {type == "Assigned Work" ? (
            <p className="text-gray-800">
              You have been assigned a new {work.type}{" "}
              <strong
                onClick={() => {
                  navigate(`/work/${work.id}`);
                }}
                className="hover:underline text-gray-600"
              >
                {work.work_code}
              </strong>{" "}
              by{" "}
              <strong className="text-gray-600">
                {triggered_by.first_name} {triggered_by.last_name}
              </strong>
              . Go to{" "}
              <span
                onClick={() => navigate("/assigned-work")}
                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
              >
                assigned work
              </span>{" "}
              to check it out.
            </p>
          ) : type == "System Notification" ? (
            <p className="text-gray-800">
              <strong
                onClick={() => {
                  navigate(`/work/${work.id}`);
                }}
                className="hover:underline text-gray-600"
              >
                {work.work_code}
              </strong>{" "}
              {message}. Taken by:{" "}
              <strong className="text-gray-600">
                {triggered_by.first_name} {triggered_by.last_name}
              </strong>{" "}
              <span className="text-gray-600">
                ({triggered_by.registration_number}) .
              </span>
            </p>
          ) : type == "ReAssigned Work" ? (
            <p className="text-gray-800">
              The work{" "}
              <strong
                onClick={() => {
                  navigate(`/work/${work.id}`);
                }}
                className="hover:underline text-gray-600"
              >
                {work.work_code}
              </strong>{" "}
              has been reassigned . New Assignee:{" "}
              <strong className="text-gray-600">
                {work.writer.first_name} {work.writer.last_name}
              </strong>{" "}
              <span className="text-gray-600">
                ({work.writer.registration_number}) .
              </span>
            </p>
          ) : type == "New Revision" ? (
            <p className="text-gray-800">
              {message} the work{" "}
              <strong
                onClick={() => {
                  navigate(`/work/${work.id}`);
                }}
                className="hover:underline text-gray-600"
              >
                ({work.work_code})
              </strong>{" "}
              by{" "}
              <strong className="text-gray-600">
                {triggered_by.first_name} {triggered_by.last_name}
              </strong>{" "}
              . Go to{" "}
              <span
                onClick={() => navigate("/revisions")}
                className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
              >
                revisions
              </span>{" "}
              to check it out.
            </p>
          ) : type == "Nearing Deadline" ? (
            <p className="text-gray-800">
              Your work{" "}
              <strong
                onClick={() => {
                  navigate(`/work/${work.id}`);
                }}
                className="hover:underline text-gray-600"
              >
                {work.work_code}
              </strong>{" "}
              is nearing its deadline on {formatDate(work.deadline)}.{" "}
              <p>
                Remaining time:{" "}
                <span className="text-sm">
                  {<CountdownToDate deadline={work.deadline} />}
                </span>
              </p>
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="text-xs flex flex-col items-end">
          <p className="whitespace-nowrap">{relativeTime(created_at)}</p>
          <Button
            onClick={() => setDropDownOpen((current) => !current)}
            buttonType="roundedIconBtn"
            className={`${
              !is_read ? "hover:bg-blue-300" : "hover:bg-neutral-200"
            } p-1 hover:dark:bg-blue-900 text-black dark:text-white hover:dark:text-white`}
          >
            <DotsThree size={32} />
          </Button>
        </div>
        {/* DROPDOWN */}
        <div
          ref={dropdownRef}
          className={`${
            dropDownOpen ? "" : "hidden"
          } absolute top-[85%] right-0 z-30 overflow-hidden shadow-[-2px_2px_5px_rgba(0,0,0,0.3)]
           dark:shadow-gray-600 bg-white w-[35%]
           rounded-lg min-h-[6rem] dark:bg-darkMode-bars dark:text-darkMode-cardText`}
        >
          <NotificationDropDownBlock
            onClick={handleDeleteNotification}
            icon={<Trash size={21} weight="fill" />}
            text={loading ? "Deleting..." : "Delete notification"}
            dropDownOpen={dropDownOpen}
            setDropDownOpen={setDropDownOpen}
          />
        </div>
      </div>
      <Divider color="secondary" />
    </>
  );
};

NotificationCard.propTypes = {
  is_read: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default NotificationCard;
