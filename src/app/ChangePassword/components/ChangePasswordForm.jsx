import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { useStateShareContext } from "../../../Context/StateContext";

const ChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const { setSettingsOpen } = useStateShareContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // setSuccess("");

    if (currentPassword == newPassword) {
      setError("New password cannot be the same as old password.");
      toast.warning("New password cannot be the same as old password.");
      setLoading(false);
    } else if (newPassword.length <= 8) {
      setError("New password length should 8 digits or more.");
      toast.warning("New password length should 8 digits or more.");
      setLoading(false);
    } else if (newPassword !== retypePassword) {
      setError("New password and retyped password should be similar.");
      toast.warning("New password and retyped password should be similar.");
      setLoading(false);
    } else {
      try {
        const response = await instance.put("/profile/change-password/", {
          old_password: currentPassword,
          new_password: newPassword,
        });

        // setSuccess(response.data.message);
        toast.success("Password updated successfully.");
        navigate(-1);
        setSettingsOpen(true);
      } catch (error) {
        if (error.response && error.response.status) {
          const status = error.response.status;
          const message = error.response.data;
          console.log(error.response.data);

          switch (status) {
            case 400:
              setError(`${message.old_password[0] || message.new_password[0]}`);
              toast.warning(
                `${message.old_password[0] || message.new_password[0]}`
              );
              break;
            case 500:
              setError(`Server Error: ${message}`);
              toast.error("Internal Server Error.");
              break;
            default:
              setError(`Error: ${message}`);
              break;
          }
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-[35%] mt-[2rem]">
      {error && <p className="text-red-500 hidden mb-5">{error}</p>}
      {success && <p className="text-green-500 hidden mb-5">{success}</p>}
      <div className="mb-8">
        <label className="text-sm text-neutral-500 dark:text-darkMode-gray">
          Type your current password*
        </label>
        <div className="mt-1">
          <input
            placeholder="Current password"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="current_password"
            // Step 3: Bind state to input
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="text-sm text-neutral-500 dark:text-darkMode-gray">
          Type your new password*
        </label>
        <div className="mt-1">
          <input
            placeholder="New password"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="new_password"
            // Step 3: Bind state to input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="text-sm text-neutral-500 dark:text-darkMode-gray">
          Retype your new password*
        </label>
        <div className="mt-1">
          <input
            placeholder="Retype password"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
             py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="retype_password"
            // Step 3: Bind state to input
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="transition-colors duration-300 hover:bg-green-600
         bg-green-500 text-white py-2 px-3 rounded-3xl text-[15px]"
        disabled={loading}
      >
        {" "}
        {loading ? "Saving..." : "Save password"}
      </button>
      <button
        onClick={() => navigate("/forgot-password")}
        className="text-gray-400 mt-5 hover:text-gray-500 transition-colors block duration-300
        w-fit cursor-pointer"
      >
        Forgot password
      </button>
    </form>
  );
};

export default ChangePasswordForm;
