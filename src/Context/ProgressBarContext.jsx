import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import instance from "../axios/instance";
import useCookies from "../CustomHooks/useCookies";

const BarContext = createContext();
export const useProgressBarContext = () => useContext(BarContext);

const ProgressBarContext = ({ children }) => {
  // The progress bar depends on them to show the current step
  const [verifyDone, setVerifyDone] = useCookies("verifyDone", false);
  const [fillDetailsDone, setFillDetailsDone] = useCookies(
    "fillDetailsDone",
    false
  );
  const [profileDone, setProfileDone] = useCookies("profileDone", false);
  const [changePasswordDone, setChangePasswordDone] = useCookies(
    "changePasswordDone",
    false
  );

  // fetching work after query
  // work
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWorks = async (query, words = null, deadline = null) => {
    setLoading(true);
    setError(null);
    // alert(words);
    try {
      const response = await instance.get("/work/", {
        params: { search: query, words, deadline },
      });
      setWork(response.data);
    } catch (error) {
      console.error("Error fetching works:", error);
      setError("Failed to fetch works. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // workDetails
  const [workDetails, setWorkDetails] = useState({});

  // profile details
  const [profile, setProfile] = useState({});
  // contact info
  const [contactInfo, setContactInfo] = useState({});
  // bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  // assigned work
  const [assignedWork, setAssignedWork] = useState([]);
  // uptaken work
  const [uptakenWork, setUptakenWork] = useState([]);

  // submissions
  const [submissions, setSubmissions] = useState([]);
  const [submissionToDelete, setSubmissionToDelete] = useState(null);

  // revisions
  const [revisions, setRevisions] = useState([]);

  return (
    <BarContext.Provider
      value={{
        verifyDone,
        setVerifyDone,
        fillDetailsDone,
        setFillDetailsDone,
        profileDone,
        setProfileDone,
        changePasswordDone,
        setChangePasswordDone,
        workDetails,
        setWorkDetails,
        work,
        setWork,
        fetchWorks,
        loading,
        setLoading,
        error,
        setError,
        profile,
        setProfile,
        contactInfo,
        setContactInfo,
        bookmarks,
        setBookmarks,
        assignedWork,
        setAssignedWork,
        uptakenWork,
        setUptakenWork,
        submissions,
        setSubmissions,
        submissionToDelete,
        setSubmissionToDelete,
        revisions,
        setRevisions,
      }}
    >
      {children}
    </BarContext.Provider>
  );
};

ProgressBarContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProgressBarContext;
