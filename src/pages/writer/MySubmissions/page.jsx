import React, { useEffect, useState } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import SubmissionCard from "./components/SubmissionCard";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useStateShareContext } from "../../../Context/StateContext";
import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import Loader from "../../../SharedComponents/Loader";
import Footer from "../../../SharedComponents/Footer";
import { useAdminContext } from "../../../Context/AdminContext";

const MySubmissions = () => {
  const { submissions, setSubmissions } = useProgressBarContext();
  const { darkMode } = useStateShareContext();
  const [loading, setLoading] = useState(false);
  const { setShowNavBar } = useAdminContext();

  useEffect(() => {
    setShowNavBar(true);
  }, []);

  const getSubmissions = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/submissions/`);
      setSubmissions(response.data);
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
    getSubmissions();
  }, []);

  return (
    <div className="w-full px-[1rem] pb-[6rem] md:px-[2rem] bg-neutral-100 dark:bg-darkMode-body min-h-screen">
      <div className="h-full w-full md:w-[70%]">
        <PageHeader
          title={"Your Submissions"}
          subTitle={"Manage your submissions. "}
        />
        <Loader loading={loading} />
        <div className={`${loading ? "hidden" : ""}`}>
          {submissions &&
            submissions.map((item, index) => {
              return <SubmissionCard key={index} {...item} />;
            })}
        </div>
        <div
          className={`pb-[8rem] ${
            loading || submissions.length > 0 ? "hidden" : ""
          }`}
        >
          <img
            className="mx-auto h-[10rem] lg:h-auto lg:w-[16rem]"
            src={darkMode ? UnavailableDark : UnavailableLight}
            alt=""
          />
          <p className="font-bold text-[17px] md:text-xl text-center">
            No submissions yet!
          </p>
          <p className="font-medium text-[13px] lg:text-[14px] text-center mt-2">
            Any submissions for work will appear here.
          </p>
        </div>
        <div className="fixed top-[5rem] right-[2rem] md:w-[21%] z-40 overflow-hidden hidden md:block">
          <Footer side={true} />
        </div>
      </div>
    </div>
  );
};

export default MySubmissions;
