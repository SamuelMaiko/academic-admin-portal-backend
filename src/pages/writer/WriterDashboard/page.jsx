import React, { useEffect, useState } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import PieActiveArc from "./components/PieActiveArc";
import Block from "./components/Block";
import { Briefcase, Note, Pen, WarningCircle, XCircle } from "phosphor-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ListComponent from "./components/ListComponent";
import SubmittedWork from "./components/SubmittedWork";
import WordsWritten from "./components/WordsWritten";
import RevokedWork from "./components/RevokedWork";
import QualityIssues from "./components/QualityIssues";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useAdminContext } from "../../../Context/AdminContext";

const WriterDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState({});
  // submiited work. Aanlytics page used for => WORDS WRITTEN,SUBMITTED WORK
  const [submittedWork, setSubmittedWork] = useState([]);

  const { setShowNavBar } = useAdminContext();

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  const percentage = (
    ((analytics.assigned_work + analytics.uptaken_work) /
      (analytics.assigned_work +
        analytics.uptaken_work +
        analytics.quality_issues)) *
    100
  ).toFixed(1);

  const getAnalytics = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/profile/analytics/`);
      setAnalytics(response.data);
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

  const getSubmittedWork = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/profile/submitted-work/`);
      setSubmittedWork(response.data);
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
    getAnalytics();
    getSubmittedWork();
  }, []);

  return (
    <div className="w-full dark:bg-darkMode-body min-h-screen overflow-hidden">
      <div className="px-[1rem] md:px-[2rem]">
        <PageHeader
          title={"Dashboard"}
          subTitle={"View your analytics on the system."}
        />
      </div>
      <div
        className="grid grid-cols-1 gap-[0.6rem] md:flex md:gap-4 pt-6 bg-gray-100
       dark:bg-darkMode-bars px-[1rem] md:px-[2rem]"
      >
        <Block
          icon={<Pen size={17} weight="fill" />}
          title={"Assigned Work"}
          value={analytics.assigned_work ?? 0}
        />
        <Block
          icon={<Briefcase size={17} weight="fill" />}
          title={"Uptaken Work"}
          value={analytics.uptaken_work ?? 0}
        />
        <Block
          icon={<Note size={17} weight="fill" />}
          title={"Words Written"}
          value={analytics.words_written ?? 0}
        />
        {/* <Block
          icon={<XCircle size={17} weight="fill" />}
          title={"Revoked Work"}
          value={analytics.revoked_work ?? 0}
        /> */}
        <Block
          icon={<WarningCircle size={17} weight="fill" />}
          title={"Quality Issues"}
          value={analytics.quality_issues ?? 0}
        />
      </div>
      <div
        className="flex flex-col md:flex-row justify-between gap-4 pt-[2rem] md:pt-[4rem]
       bg-gray-100 dark:bg-darkMode-bars px-[1rem] md:px-[2rem] pb-[3rem]"
      >
        <div
          className="bg-white dark:bg-darkMode-cardBg dark:text-white h-full p-5 w-full
         rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.17)]"
        >
          <h1 className=" font-semibold mb-8 text-[16px] lg:text-xl">
            Performance
          </h1>
          <div className="">
            <PieActiveArc
              successfulWork={
                analytics && analytics.assigned_work + analytics.uptaken_work
              }
              qualityIssues={analytics && analytics.quality_issues}
            />
          </div>
        </div>
        <div
          className="h-[14rem] md:h-[18.6rem] p-5 w-full rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.17)]
         bg-white dark:bg-darkMode-cardBg"
        >
          <h1 className=" font-semibold text-[16px] lg:text-xl">
            Quality score
          </h1>
          <div className="h-[10rem] md:h-[14rem] pt-4">
            <CircularProgressbar
              value={isNaN(percentage) ? 100 : percentage}
              // value={100}
              // text={`${percentage === 0 ? 100 : percentage}%`}
              text={`${isNaN(percentage) ? 100 : percentage}%`}
              // text={`${percentage === 0 ? 100 : percentage}%`}
              className="h-full "
              styles={buildStyles({
                pathColor: `rgba(10, 199, 10, ${
                  isNaN(percentage) ? 100 / 100 : percentage / 100
                })`,
                textColor: "rgba(10, 220, 10,1)",
                backgroundColor: "red",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
        </div>
      </div>
      <SubmittedWork
        submittedWork={submittedWork}
        setSubmittedWork={setSubmittedWork}
      />
      <WordsWritten
        submittedWork={submittedWork}
        setSubmittedWork={setSubmittedWork}
      />
      {/* <RevokedWork /> */}
      <QualityIssues />
    </div>
  );
};

export default WriterDashboard;
