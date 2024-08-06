import React, { useState } from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useStateShareContext } from "../../../Context/StateContext";
import { createNewCookie, getCookie } from "../../../Cookies/Cookie";

const CompleteProfileForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { setImageURL } = useStateShareContext();
  const [file, setFile] = useState(null);
  const { setProfileDone } = useProgressBarContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();

    if (file) {
      formData.append("profile_picture", file);
    }
    formData.append("bio", bio);

    if (bio === "") {
      toast.warning("Bio required");
    } else {
      try {
        const response = await instance.put(
          "/onboarding/complete-profile/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // setSuccess(response.data.message);
        toast.success("Profile updated successfully.");

        // updating the cookie to show they have completed the step
        createNewCookie("profileDone", true);
        setProfileDone(true);

        setImageURL(response.data.profile_picture_absolute);

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
          const message = error.response.data.error;

          switch (status) {
            case 400:
              setError(`${message}`);
              toast.warning(message);
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Save the first selected file
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full ">
      {error && <p className="text-red-500 hidden mt-3">{error}</p>}
      {success && <p className="text-green-500 hidden mb-3">{success}</p>}
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <p className="text-sm">Profile picture</p>
        <input
          id="picture"
          type="file"
          className="flex h-10 w-full rounded-md border border-input bg-blue-100 px-3 py-2 mb-7 text-sm
                 text-gray-400 file:border-0 file:bg-white file:text-gray-600 file:text-sm file:font-medium"
          onChange={handleFileChange}
        />
      </div>
      <div className="relative inline ">
        <textarea
          rows={"5"}
          type="text"
          className="pl-4 border-gray-300 border w-full md:w-[60%] outline-none pt-3"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <label className="absolute bg-white bottom-[7.95rem] left-4 px-1 text-gray-600 text-sm">
          Bio
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-3 mt-4 rounded-md bg-blue-500 text-white font-medium block"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Save"}
      </button>
    </form>
  );
};

export default CompleteProfileForm;
