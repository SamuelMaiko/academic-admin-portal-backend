import { Textarea } from "keep-react";
import React, { useEffect, useState } from "react";

const EditBasicInfo = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  bio,
  setBio,
}) => {
  return (
    <div>
      <h1 className="text-[15px] lg:text-[16px] font-semibold mb-4">
        Basic info
      </h1>
      <div className="flex items-center justify-between gap-5 md:gap-10">
        <div className="w-full">
          <label className="text-[14px] lg:text-[15px] text-neutral-500 dark:text-darkMode-gray">
            First name*
          </label>
          <div className="mt-1">
            <input
              placeholder="First name"
              type="text"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
            py-2 text-[14px] lg:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-1
            focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="text-[14px] lg:text-[15px] text-neutral-500 dark:text-darkMode-gray">
            Last name*
          </label>
          <div className="mt-1">
            <input
              placeholder="Last name"
              type="text"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
            px-3 py-2 text-[14px] lg:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBasicInfo;
