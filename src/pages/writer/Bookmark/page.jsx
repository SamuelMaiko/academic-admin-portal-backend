import React, { useEffect, useState } from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import WorkCard from "../WorkFeed/components/WorkCard";
import { useStateShareContext } from "../../../Context/StateContext";
import BookmarkDark from "../../../assets/BookmarkDark.png";
import BookmarkLight from "../../../assets/BookmarkLight.png";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import Loader from "../../../SharedComponents/Loader";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import Footer from "../../../SharedComponents/Footer";
import { useAdminContext } from "../../../Context/AdminContext";

const Bookmark = () => {
  const { darkMode } = useStateShareContext();
  const { bookmarks, setBookmarks } = useProgressBarContext();
  const [loading, setLoading] = useState(true);
  const { setShowNavBar } = useAdminContext();

  useEffect(() => {
    setShowNavBar(true);
    getBookmarks();
  }, []);

  const getBookmarks = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/bookmarks/");
      setBookmarks(response.data);
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

  return (
    <div className="relative w-full min-h-screen px-[1rem] md:px-[2rem] pb-[5rem] dark:bg-darkMode-body">
      <div className="h-full w-full md:w-[70%]">
        <PageHeader
          title={"Bookmarks"}
          subTitle={"See the work that you saved to keep tabs on."}
        />
        <Loader loading={loading} />
        <div className={`${loading ? "hidden" : ""}`}>
          {bookmarks &&
            bookmarks.map((work, index) => {
              return <WorkCard key={index} {...work} />;
            })}
        </div>

        <div
          className={`pb-[8rem] ${
            loading || bookmarks.length > 0 ? "hidden" : ""
          }`}
        >
          <img
            className="mx-auto h-[10rem] lg:h-auto lg:w-[16rem]"
            src={darkMode ? BookmarkDark : BookmarkLight}
            alt=""
          />
          <p className="font-bold text-[17px] md:text-xl text-center">
            No bookmarks yet!
          </p>
          <p className="font-medium text-[13px] lg:text-[14px] text-center mt-2">
            Any bookmarks will appear here.
          </p>
        </div>
      </div>
      <div className="fixed top-[5rem] w-0 md:w-[21%] hidden md:block right-[2rem] z-40">
        <Footer side={true} />
      </div>
    </div>
  );
};

export default Bookmark;
