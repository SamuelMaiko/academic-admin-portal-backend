import React, { useState } from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { createNewCookie, getCookie } from "../../../Cookies/Cookie";

const NewPasswordForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypedNewPassword, setRetypedNewPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { setChangePasswordDone } = useProgressBarContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    if (oldPassword == newPassword) {
      setError("New password cannot be the same as old password.");
      toast.warning("New password cannot be the same as old password.");
      setIsLoading(false);
    } else if (newPassword.length <= 8) {
      setError("New password length should 8 digits or more.");
      toast.warning("New password length should 8 digits or more.");
      setIsLoading(false);
    } else if (newPassword !== retypedNewPassword) {
      setError("New password and retyped password should be similar.");
      toast.warning("New password and retyped password should be similar.");
      setIsLoading(false);
    } else {
      try {
        const response = await instance.put(
          "/profile/change-password/?type=first",
          {
            old_password: oldPassword,
            new_password: newPassword,
          }
        );

        // setSuccess(response.data.message);
        toast.success("Password updated successfully.");

        // updating the cookie to show they have completed the step
        createNewCookie("changePasswordDone", true);
        setChangePasswordDone(true);

        // conditionally navigate
        if (getCookie("verifyDone") === "true") {
          if (getCookie("fillDetailsDone") === "true") {
            if (getCookie("profileDone") === "true") {
              if (getCookie("changePasswordDone") === "true") {
                navigate("/onboarding/success");
              } else {
                navigate("/onboarding/change-password");
              }
            } else {
              navigate("/onboarding/complete-profile");
            }
          } else {
            navigate("/onboarding/fill-details");
          }
        } else {
          navigate("/onboarding/verify-email");
        }
      } catch (error) {
        if (error.response && error.response.status) {
          const status = error.response.status;
          const message = error.response.data;

          switch (status) {
            case 400:
              setError(`${message.old_password[0]}`);
              toast.warning(`${message.old_password[0]}`);
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
        setIsLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center flex-1 "
    >
      {error && <p className="text-red-500 hidden mb-5">{error}</p>}
      {success && <p className="text-green-500 hidden mb-5">{success}</p>}
      <div className="relative w-[97%] md:w-[50%] mb-5">
        <input
          type="password"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border outline-none"
          placeholder="Old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Old password
        </label>
      </div>
      <div className="relative w-[97%] md:w-[50%] mb-5">
        <input
          type="password"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border outline-none"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          New password
        </label>
      </div>
      <div className="relative w-[97%] md:w-[50%] mb-5">
        <input
          type="password"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border outline-none"
          placeholder="Retype New password"
          value={retypedNewPassword}
          onChange={(e) => setRetypedNewPassword(e.target.value)}
          required
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Retype New password
        </label>
      </div>

      <button
        type="submit"
        className="px-6 py-3 md:py-4 mt-4 rounded-md bg-blue-500 text-white font-medium block"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Save New Password"}
      </button>
    </form>
  );
};

export default NewPasswordForm;
