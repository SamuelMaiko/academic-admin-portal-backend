import React, { useEffect, useState } from "react";
import WorkCard from "./components/WorkCard";
import PageHeader from "../../SharedComponents/PageHeader";
import Footer from "../Footer/page";
import Loader from "../../SharedComponents/Loader";
import SearchInput from "./components/SearchInput";
import Filters from "./components/Filters";
import { useStateShareContext } from "../../Context/StateContext";
import UnavailableDark from "../../assets/UnavailableDark.png";
import UnavailableLight from "../../assets/UnavailableLight.png";
import { toast } from "react-toastify";
import instance from "../../axios/instance";
import { useProgressBarContext } from "../../Context/ProgressBarContext";

const Home = () => {
  const { work, setWork } = useProgressBarContext();
  const [loading, setLoading] = useState(true);
  const { filters, darkMode, firstName, lastName, getDetails } =
    useStateShareContext();

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
    // getWork();
  }, []);
  return (
    <div
      className={` relative px-[1rem] md:px-[2rem] pb-[5rem] dark:bg-darkMode-body dark:text-darkMode-text`}
    >
      <div className="sticky top-[5rem] bg-white dark:bg-darkMode-body z-40 pb-3 pt-4">
        <SearchInput />
        <Filters />
      </div>
      <div className="h-full w-[100%] md:w-[70%]">
        <PageHeader
          title={"Available work"}
          subTitle={
            "Browse work that matches your experience. Ordered by closest to deadline."
          }
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
            className="mx-auto w-[16rem]"
            src={darkMode ? UnavailableDark : UnavailableLight}
            alt=""
          />
          <p className="font-bold text-2xl text-center">No work found!</p>
          <p className="font-medium text-sm text-center mt-2">
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

export default Home;
