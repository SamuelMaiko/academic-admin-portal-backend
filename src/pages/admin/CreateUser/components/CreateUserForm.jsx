import { Textarea } from "keep-react";
import React, { useState } from "react";
import createUser from "../api/createUser";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate } from "react-router-dom";

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Writer");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      role: role,
    };

    setLoading(true);

    createUser(data).then((data) => {
      setLoading(false);
      navigate("/manage-users");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-5 w-full md:w-[58%]">
      <div className="mt-1 mb-5 ">
        <label className="text-[14px] lg:text-[15px] text-neutral-500 dark:text-darkMode-gray">
          First name*
        </label>
        <input
          placeholder="First name"
          type="text"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
           py-2 text-[14px] lg:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-1
            focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
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
            required
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="text-[14px] lg:text-[15px] text-neutral-500 dark:text-darkMode-gray">
          Email*
        </label>
        <div className="mt-1">
          <input
            placeholder="Email"
            type="email"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-[14px] lg:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="text-[14px] lg:text-[15px] text-neutral-500 dark:text-darkMode-gray">
          Password*
        </label>
        <div className="mt-1">
          <input
            placeholder="Password"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-[14px] lg:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-5">
        <label className="text-[14px] lg:text-[15px] text-neutral-500 dark:text-darkMode-gray">
          Role
        </label>
        <div className="flex gap-8">
          <div className="flex gap-2 text-neutral-500 text-[14px] lg:text-[15px]">
            <input
              type="radio"
              name="role"
              id="Admin"
              className="cursor-pointer"
              onChange={handleRoleChange}
              checked={role == "Admin"}
            />
            <label htmlFor="Admin">Admin</label>
          </div>
          <div className="flex gap-2 text-neutral-500 text-[14px] lg:text-[15px]">
            <input
              type="radio"
              name="role"
              id="Writer"
              className="cursor-pointer"
              onChange={handleRoleChange}
              checked={role == "Writer"}
            />
            <label htmlFor="Writer">Writer</label>
          </div>
        </div>
      </div>
      <p className="text-red-500 mb-4 font-medium text-[13px] md:text-[14px]">
        The registration number is assigned automatically after creation.
      </p>

      <input
        className="bg-green-700 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer text-[13px] md:text-[14px]"
        type="submit"
        value={loading ? "Creating..." : "Create"}
        disabled={loading}
      />
    </form>
  );
};

export default CreateUserForm;
