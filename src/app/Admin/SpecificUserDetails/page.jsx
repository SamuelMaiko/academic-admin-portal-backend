import React from "react";
import PageHeader from "../../../SharedComponents/PageHeader";
import { Divider } from "keep-react";
import UserDetail from "./components/UserDetail";

const SpecificUserDetails = () => {
  return (
    <div className="px-[2rem]">
      <PageHeader
        title="User Details"
        subTitle={"View user details for a specific user"}
      />
      <div className="">
        <UserDetail title={"Registration Number"} value={"A4124"} />
        <UserDetail title={"Full Name"} value={"John Doe"} />
        <UserDetail title={"Email"} value={"test@gmail.com"} />
        <UserDetail title={"Phone Number"} value={"0729165447"} />
        <UserDetail title={"Role"} value={"Writer"} />
        <UserDetail title={"Status"} value={"Active"} />
        <UserDetail title={"Date Joined"} value={"23-04-2024"} />
        <UserDetail title={"Submits"} value={"23"} />
      </div>
    </div>
  );
};

export default SpecificUserDetails;
