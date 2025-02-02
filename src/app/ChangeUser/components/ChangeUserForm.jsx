import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import { Divider } from "keep-react";
import ImportantDates from "./ImportantDates";
import { Time, parseAbsoluteToLocal } from "@internationalized/date";
import { useAdminContext } from "../../../Context/AdminContext";
import { Key } from "phosphor-react";
import getAccountDetails from "../api/getAccountDetails";
import { useParams } from "react-router-dom";
import updateAccountDetails from "../api/updateAccountDetails";
import resetUserPassword from "../api/resetUserPassword";

const ChangeUserForm = () => {
  const { setShowDeleteUserModal, setShowDeactivateUserModal } =
    useAdminContext();
  const [regNo, setRegNo] = useState("");
  const [changePassLoading, setChangePassLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [role, setRole] = useState("");
  const [lastLoginDate, setLastLoginDate] = useState(null);
  const [dateJoinedDate, setDateJoinedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getAccountDetails(id).then((data) => {
      // console.log(data);
      setRegNo(data.registration_number);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
      setPhoneNumber(data.phone_number);
      setRole(data.role);
      setEmailVerified(data.is_verified);
      setDateJoinedDate(data.date_joined);
      setLastLoginDate(data.last_login);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phoneNumber,
      role,
      is_verified: emailVerified,
    };
    //  api request
    updateAccountDetails(id, data).then((data) => {
      console.log(data);
    });
  };

  const handlePasswordReset = () => {
    setChangePassLoading(true);
    resetUserPassword(id).then((data) => {
      setChangePassLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-5 w-[58%] pb-14">
      <div className="mt-1 mb-5">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Reg no.
        </label>
        <input
          placeholder="Regitration number"
          type="text"
          className="flex mt-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
                py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
                    focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          name="type"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          disabled
        />
      </div>
      {/* resetting the user password */}
      <div className="mt-8">
        <p>
          Click the button below to send the updated password to the user's
          email.
        </p>
        <button
          onClick={handlePasswordReset}
          className="bg-green-700 hover:bg-green-800 mt-3 rounded-3xl text-white flex items-center gap-1
        } p-[0.6rem] cursor-pointer transition-colors duration-300 px-4 mb-8"
          type="button"
          disabled={changePassLoading}
        >
          <Key size={20} />
          {changePassLoading ? "Resetting..." : "Reset Password"}
        </button>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      {/* personal info section */}
      <PersonalInfo
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        emailVerified={emailVerified}
        setEmailVerified={setEmailVerified}
        role={role}
        setRole={setRole}
      />
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      {/* important dates */}
      <ImportantDates
        lastLoginDate={lastLoginDate}
        dateJoinedDate={dateJoinedDate}
      />
      <div className="flex justify-between items-center">
        <input
          onClick={() => {}}
          className="bg-green-700 hover:bg-green-800 mt-3 rounded-lg text-white flex items-center 
            } p-[0.6rem] cursor-pointer transition-colors duration-300"
          type="submit"
          value={loading ? "Saving..." : "Save"}
          disabled={loading}
        />
        <div className="flex gap-4">
          <input
            onClick={() => setShowDeactivateUserModal(true)}
            className="bg-orange-500 hover:bg-orange-600 mt-3 rounded-lg text-white flex items-center 
            } p-[0.6rem] cursor-pointer transition-colors duration-300"
            type="button"
            value={loading ? "Deactivating..." : "Deactivate"}
            disabled={loading}
          />
          <input
            onClick={() => setShowDeleteUserModal(true)}
            className="bg-red-700 hover:bg-red-800 mt-3 rounded-lg text-white flex items-center 
          } p-[0.6rem] cursor-pointer transition-colors duration-300"
            type="button"
            value={loading ? "Deleting..." : "Delete"}
            disabled={loading}
          />
        </div>
      </div>
    </form>
  );
};

export default ChangeUserForm;
