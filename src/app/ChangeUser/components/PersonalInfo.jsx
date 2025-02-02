import React from "react";

const PersonalInfo = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  emailVerified,
  setEmailVerified,
  role,
  setRole,
}) => {
  const handleRoleChange = (e) => {
    setRole(e.target.id);
  };

  return (
    <>
      <h1 className="mt-8 bg-blue-500 text-white py-2 px-1 text-md">
        Personal Info
      </h1>
      <div className="mt-5 mb-5">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          First name*
        </label>
        <input
          placeholder="First name"
          type="text"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
           py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
            focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Last name*
        </label>
        <div className="mt-1">
          <input
            placeholder="Last name"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Email*
        </label>
        <div className="mt-1">
          <input
            placeholder="Email"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="last_name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Phone number*
        </label>
        <div className="mt-1">
          <input
            placeholder="Phone number"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="last_name"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-5 mt-5 flex items-center gap-5">
        <input
          type="checkbox"
          name="isVerified"
          id="submitted"
          onChange={() => setEmailVerified((current) => !current)}
          checked={emailVerified}
        />
        <label
          htmlFor="submitted"
          className="text-base text-neutral-500 dark:text-darkMode-gray "
        >
          email verified
        </label>
      </div>

      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Role
        </label>
        <div className="flex gap-8">
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="role"
              id="Admin"
              className="cursor-pointer"
              onChange={handleRoleChange}
              checked={role === "Admin"}
            />
            <label htmlFor="Admin">Admin</label>
          </div>
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="role"
              id="Writer"
              className="cursor-pointer"
              onChange={handleRoleChange}
              checked={role === "Writer"}
            />
            <label htmlFor="Writer">Writer</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
