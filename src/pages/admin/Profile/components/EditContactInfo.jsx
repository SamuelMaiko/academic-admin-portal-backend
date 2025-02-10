import React from "react";

const EditContactInfo = ({
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  linkedIn,
  setLinkedIn,
}) => {
  return (
    <div className="mt-10">
      <h1 className="text-[15px] lg:text-[16px]l font-semibold mb-4">
        Contact info
      </h1>
      <div className="mb-4 ">
        <label className="text-[14px] lg:text-[15px] text-neutral-500 dark:text-darkMode-gray">
          Phone number*
        </label>
        <div className="mt-1">
          <input
            placeholder="Phone number"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-[14px] lg:text-[15px]
             placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1
              disabled:cursor-not-allowed disabled:opacity-50"
            name="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="text-[14px] lg:text-[15px] text-neutral-500 dark:text-darkMode-gray">
          Email*
        </label>
        <div className="mt-1">
          <input
            placeholder="Email"
            type="email"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-[14px] lg:text-[15px]
            placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 "
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditContactInfo;
