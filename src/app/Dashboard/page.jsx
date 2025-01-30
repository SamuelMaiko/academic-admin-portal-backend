import React, { useEffect, useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import PieActiveArc from "./components/PieActiveArc";
import Block from "./components/Block";
import {
  Briefcase,
  CaretDown,
  Note,
  Pen,
  WarningCircle,
  XCircle,
} from "phosphor-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ListComponent from "./components/ListComponent";
import SubmittedWork from "./components/SubmittedWork";
import WordsWritten from "./components/WordsWritten";
import RevokedWork from "./components/RevokedWork";
import QualityIssues from "./components/QualityIssues";
import { toast } from "react-toastify";
import instance from "../../axios/instance";
import WorkCompletedGraph from "./components/WorkCompletedGraph";
import OverallWritersScore from "./components/OverallWritersScore";
import TableWriterProficiency from "./components/TableWriterProficiency";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState({});
  // submiited work. Aanlytics page used for => WORDS WRITTEN,SUBMITTED WORK
  const [submittedWork, setSubmittedWork] = useState([]);

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
    // getAnalytics();
    // getSubmittedWork();
  }, []);

  return (
    <div className="w-full bg-gray-100 dark:bg-darkMode-body min-h-screen overflow-hidden">
      <div className="px-[1rem] md:px-[2rem]">
        <PageHeader
          title={"Dashboard"}
          subTitle={"View your analytics and statistics on the system."}
        />
      </div>
      <div
        className="grid grid-cols-2 gap-[0.6rem] md:flex md:gap-4 pt-6 bg-gray-100
       dark:bg-darkMode-bars px-[1rem] md:px-[2rem]"
      >
        <Block
          icon={<XCircle size={21} weight="fill" />}
          title={"Writers employed"}
          value={analytics.revoked_work ?? 0}
        />
        <Block
          icon={<Pen size={21} weight="fill" />}
          title={"Work completed"}
          value={analytics.assigned_work ?? 0}
        />
        <Block
          icon={<Note size={21} weight="fill" />}
          title={"Words written"}
          value={analytics.words_written ?? 0}
        />
        <Block
          icon={<Briefcase size={21} weight="fill" />}
          title={"Revoked work"}
          value={analytics.uptaken_work ?? 0}
        />
        {/* <Block
          icon={<WarningCircle size={17} weight="fill" />}
          title={"Quality Issues"}
          value={analytics.quality_issues ?? 0}
        /> */}
      </div>
      <div
        className="flex flex-col md:flex-row justify-between gap-4 pt-[2rem] md:pt-[3rem]
       bg-gray-100 dark:bg-darkMode-bars px-[1rem] md:px-[2rem] pb-[3rem]"
      >
        {/* left square with trophy */}
        <OverallWritersScore />
        {/* right square with graph*/}
        <WorkCompletedGraph />
      </div>
      <h1 className="font-semibold text-xl pl-[2rem]">Writers Proficiency</h1>
      <div className="p-5 w-full bg-transparent ">
        <TableWriterProficiency />
      </div>
    </div>
  );
};

export default Dashboard;
