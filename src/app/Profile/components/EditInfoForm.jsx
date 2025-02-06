import React, { useState } from "react";
import { X } from "phosphor-react";
import EditBasicInfo from "./EditBasicInfo";
import EditLocation from "./EditLocation";
import EditContactInfo from "./EditContactInfo";
import SaveButton from "./SaveButton";

const EditInfoForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  country,
  setCountry,
  county,
  setCounty,
}) => {
  return (
    <div
      className=" w-full md:w-full  md:px-2 
 bg-bgcolor dark:bg-darkMode-body
      dark:text-darkMode-text    
     "
    >
      {/* header */}
      <div className="flex justify-between items-center py-3 px-4 border-b-neutral-300 border-b-[1px]">
        <p className="text-[18px] lg:text-xl font-semibold">Edit info</p>
      </div>
      {/* central body */}
      <form className="px-4 md:px-8 ">
        <p className="text-neutral-500 dark:text-darkMode-gray text-sm mt-4 mb-7">
          * Indicates required
        </p>
        <EditBasicInfo
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
        />
        <EditContactInfo
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
        />
        <EditLocation
          country={country}
          setCountry={setCountry}
          county={county}
          setCounty={setCounty}
        />
      </form>
      {/* footer */}
      <div className=" h-[3.9rem] flex items-center justify-between px-5  ">
        <div></div>
        <SaveButton
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          email={email}
          country={country}
          county={county}
        />
      </div>
    </div>
  );
};

export default EditInfoForm;
