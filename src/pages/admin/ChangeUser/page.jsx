import React, { useState } from "react";
import ChangeUserForm from "./components/ChangeUserForm";
import PageHeader from "../../../SharedComponents/PageHeader";
import Loader from "../../../SharedComponents/Loader";

const ChangeUser = () => {
  // for the page before awaiting details fetching
  const [loading, setLoading] = useState(false);

  return (
    <div
      className={`relative w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader title="Change user" subTitle={"Edit user account details."} />

      <ChangeUserForm onSetLoading={setLoading} />

      <div
        className={`absolute bg-[rgba(255,255,255,0.9)] inset-0 bottom-0 flex flex-col items-center pt-[13rem]
        ${loading ? "" : "hidden"}
        `}
      >
        <Loader loading={loading} />
        <h1 className="font-semibold">Loading ...</h1>
      </div>
    </div>
  );
};

export default ChangeUser;
