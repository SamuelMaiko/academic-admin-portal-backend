import React, { useEffect, useState } from "react";
import WorkCard from "./components/WorkCard";
import PageHeader from "../../../SharedComponents/PageHeader";
import SearchInput from "./components/SearchInput";
import Filters from "./components/Filters";
import UnavailableDark from "../../../assets/UnavailableDark.png";
import UnavailableLight from "../../../assets/UnavailableLight.png";
import { toast } from "react-toastify";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import instance from "../../../axios/instance";
import { useStateShareContext } from "../../../Context/StateContext";
import Footer from "../../../SharedComponents/Footer";
import Loader from "../../../SharedComponents/Loader";
import { useAdminContext } from "../../../Context/AdminContext";

const WorkFeed = () => {
  const { work, setWork } = useProgressBarContext();
  const [loading, setLoading] = useState(true);
  const { setShowNavBar } = useAdminContext();
  const { filters, darkMode, firstName, lastName, getDetails } =
    useStateShareContext();

  useEffect(() => {
    getWork();
    // getDetails();
  }, []);

  const getWork = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/work/");
      setWork(response.data);
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
    setShowNavBar(true);
  }, []);

  return (
    <div
      className={` relative ] pb-[5rem] dark:bg-darkMode-body dark:text-darkMode-text `}
    >
      <div className="sticky top-[5rem] bg-white dark:bg-darkMode-body z-[10] pb-3 pt-4 px-[1rem] md:px-[2rem">
        <SearchInput />
        <Filters />
      </div>
      {/* bg-gray-100 */}
      <div className="min-h-[100vh] w-[100%] md:w-[70%] px-[1rem] md:px-[2rem">
        <PageHeader
          title={"Available work"}
          subTitle={"Browse work that matches your experience."}
        />
        <Loader loading={loading} />
        <div className={`${loading ? "hidden" : ""}`}>
          {work &&
            work.map((work, index) => {
              return <WorkCard key={index} {...work} />;
            })}
        </div>
        <div
          className={`pb-[8rem] ${loading || work.length > 0 ? "hidden" : ""}`}
        >
          <img
            className="mx-auto h-[10rem] lg:h-auto lg:w-[16rem]"
            src={darkMode ? UnavailableDark : UnavailableLight}
            alt=""
          />
          <p className="font-bold text-[17px] md:text-xl text-center">
            No work found!
          </p>
          <p className="font-medium text-[13px] lg:text-[14px] text-center mt-2">
            work will appear here.
          </p>
        </div>
      </div>
      <div className="fixed top-[11rem] right-[2rem] md:w-[21%] z-40 overflow-hidden hidden md:block">
        <Footer side={true} />
      </div>
    </div>
  );
};

export default WorkFeed;
