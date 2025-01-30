import { Textarea } from "keep-react";
import React, { useState } from "react";

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const loading = false;

  return (
    <form className="pt-5 w-[58%]">
      <div className="mt-1 mb-5">
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
      <div className="mb-8">
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
          Role
        </label>
        <div className="flex gap-8">
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="status"
              id="In progress"
              className="cursor-pointer"
              onChange={() => {}}
            />
            <label htmlFor="In progress">Admin</label>
          </div>
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="status"
              id="Completed"
              className="cursor-pointer"
              onChange={() => {}}
            />
            <label htmlFor="Completed">Writer</label>
          </div>
        </div>
      </div>

      <input
        onClick={() => {}}
        className="bg-green-700 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer"
        type="submit"
        value={loading ? "Creating..." : "Create"}
        disabled={loading}
      />
    </form>
  );
};

export default CreateUserForm;
