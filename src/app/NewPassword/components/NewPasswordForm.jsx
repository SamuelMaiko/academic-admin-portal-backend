import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { deleteCookie, getCookie } from "../../../Cookies/Cookie";

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const tempToken = getCookie("tempToken");

  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [retypedNewPassword, setRetypedNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (newPassword !== retypedNewPassword) {
      setError("New password and retyped password should be similar.");
      setLoading(false);
    } else if (newPassword.length <= 8) {
      setError("New password length should 8 digits or more.");
      setLoading(false);
    } else {
      try {
        const response = await instance.post("/auth/submit-new-password/", {
          temp_token: tempToken,
          new_password: newPassword,
        });
        toast.success("Password updated successfully.");
        // deleting to prevent user accessing this page after moving forward or using this route. Reason: useEffect checks its available
        deleteCookie("tempToken");
        navigate("/reset-successful");
      } catch (error) {
        if (error.response && error.response.status) {
          const status = error.response.status;
          const message = error.response.data;
          console.log(error.response.data);

          switch (status) {
            case 400:
              setError(`${message.old_password[0]}`);
              break;
            case 500:
              setError(`Server Error: ${message}`);
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

  useEffect(() => {
    if (!tempToken) {
      navigate("/login");
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-[27%] p-6 rounded-lg md:shadow-[0_2px_12px_rgba(0,0,0,0.2)] relative"
    >
      {error && <p className="text-red-500 absolute -top-12 ">{error}</p>}
      <h1 className="text-[25px] font-semibold mb-2">Choose a new password</h1>
      <p className="text-[13px] my-5 text-gray-600">
        To secure your account, choose a strong password you haven’t used before
        and is at least 8 characters long.
      </p>
      <div className="">
        <label className="text-sm text-neutral-500 dark:text-darkMode-gray">
          New password
        </label>
        <div className="mt-1">
          <input
            placeholder="New password"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="new_password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm text-neutral-500 dark:text-darkMode-gray">
          Retype new password
        </label>
        <div className="mt-1">
          <input
            placeholder="Retype new password"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="retype_new_password"
            value={retypedNewPassword}
            onChange={(e) => setRetypedNewPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="transition-colors duration-300 hover:bg-blue-600 mt-7
         bg-blue-500 text-white py-3 px-3 rounded-3xl w-full font-medium "
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default NewPasswordForm;
