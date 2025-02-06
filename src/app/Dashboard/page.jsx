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
import getGeneralAnalytics from "./api/getGeneralAnalytics";
import Loader from "../../SharedComponents/Loader";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [generalAnalytics, setGeneralAnalytics] = useState({});

  useEffect(() => {
    setLoading(true);
    getGeneralAnalytics().then((data) => {
      setGeneralAnalytics(data);
      setLoading(false);
      // console.log(data);
    });
  }, []);

  return (
    <div className="relative w-full bg-gray-100 dark:bg-darkMode-body min-h-screen overflow-hidden">
      <div className="px-[1rem] md:px-[2rem]">
        <PageHeader
          title={"Dashboard"}
          subTitle={"View your analytics and statistics on the system."}
        />
      </div>
      <div
        className="grid grid-cols-2 gap-[0.6rem] md:flex md:gap-4 pt-6 bg-gray-100
       dark:bg-darkMode-bars px-[1rem] md:px-[2rem] pb-6"
      >
        <Block
          icon={<XCircle size={21} weight="fill" />}
          title={"Writers employed"}
          value={generalAnalytics && generalAnalytics.writers_employed}
        />
        <Block
          icon={<Pen size={21} weight="fill" />}
          title={"Work completed"}
          value={generalAnalytics && generalAnalytics.work_completed}
        />
        <Block
          icon={<Note size={21} weight="fill" />}
          title={"Words written"}
          value={generalAnalytics && generalAnalytics.words_written}
        />
        {/* <Block
          icon={<Briefcase size={21} weight="fill" />}
          title={"Revoked work"}
          value={generalAnalytics && generalAnalytics.uptaken_work }
        /> */}
        <Block
          icon={<WarningCircle size={17} weight="fill" />}
          title={"Poor work"}
          value={generalAnalytics && generalAnalytics.poor_work}
        />
      </div>
      <div
        // className="flex flex-col md:flex-row justify-between gap-4 pt-[2rem] md:pt-[3rem]
        className="hidden flex-col md:flex-row justify-between gap-4 pt-[2rem] md:pt-[3rem]
       bg-gray-100 dark:bg-darkMode-bars px-[1rem] md:px-[2rem] pb-[3rem]"
      >
        {/* left square with trophy */}
        <OverallWritersScore />
        right square with graph
        <WorkCompletedGraph />
      </div>
      <h1 className="font-semibold text-xl pl-[2rem] mt-[3rem]">
        Writers Proficiency
      </h1>
      {/* <div className="p-5 w-full bg-transparent "> */}
      <div className=" p-5 w-full bg-transparent">
        <TableWriterProficiency loading={loading} setLoading={setLoading} />
      </div>

      {/* page loader */}
      <div
        className={`absolute bg-[rgba(255,255,255,0.85)] inset-0 h-[80vh] bottom-0 flex flex-col items-center justify-center
        ${loading ? "" : "hidden"}
        `}
      >
        <Loader loading={loading} />
        <h1 className="font-semibold">Loading ...</h1>
      </div>
    </div>
  );
};

export default Dashboard;
