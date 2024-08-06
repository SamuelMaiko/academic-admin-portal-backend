import React, { useEffect, useState } from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const BookmarkToggle = ({ onClick, isBookmarked, setisBookmarked, id }) => {
  const { darkMode } = useStateShareContext();
  const { bookmarks, setBookmarks, work, setWork } = useProgressBarContext();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setisBookmarked((current) => current);
    // alert(isBookmarked);
  }, [location.search]);

  const handleBookmarkWork = async (e) => {
    e.stopPropagation();

    setLoading(true);
    try {
      if (!isBookmarked) {
        const response = await instance.post(`/bookmarks/add/${id}/`);
        // the specific work
        const bookmarkedWork = work.find((item) => item.id === id);
        // adding to bookmark state
        setBookmarks((current) => [
          { ...bookmarkedWork, is_bookmarked: true },
          ...current,
        ]);

        const updatedWork = work.map((item, index) => {
          return item.id == id ? { ...item, is_bookmarked: true } : item;
        });
        // console.log(updatedWork);
        setWork(updatedWork);
        toast.success("Work added to bookmarks.");
      } else {
        const response = await instance.delete(`/bookmarks/remove/${id}/`);
        const updatedWork = work.map((item, index) => {
          return item.id == id ? { ...item, is_bookmarked: false } : item;
        });

        // console.log(updatedWork);
        setWork(updatedWork);
        const updatedBookmarks = bookmarks.filter((item) => item.id !== id);
        setBookmarks(updatedBookmarks);
        // toast.success("Work removed from bookmarks.");
      }
      setisBookmarked((current) => !current);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 400:
            toast.error(message);
            break;
          case 404:
            toast.error(message);
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            console.log(`Error: ${message}`);
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
    <button
      onClick={handleBookmarkWork}
      className="ui-bookmark absolute top-8 right-4 "
      disabled={loading}
    >
      <input
        type="checkbox"
        checked={isBookmarked && isBookmarked}
        onChange={() => {}}
      />
      <div className="bookmark ">
        {!isBookmarked & darkMode ? (
          <svg viewBox="0 0 32 32" fill="white">
            <g>
              <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
            </g>
          </svg>
        ) : (
          <svg viewBox="0 0 32 32" className="">
            <g>
              <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
            </g>
          </svg>
        )}
      </div>
    </button>
  );
};

export default BookmarkToggle;
