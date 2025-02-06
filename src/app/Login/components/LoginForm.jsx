import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStateShareContext } from "../../../Context/StateContext";
import instance from "../../../axios/instance";
import { createNewCookie } from "../../../Cookies/Cookie";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import Vini from "../../../assets/Default_pfp.jpg";

const LoginForm = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { success, setSuccess, setDarkMode } = useStateShareContext();
  const navigate = useNavigate();
  const {
    setVerifyDone,
    setFillDetailsDone,
    setProfileDone,
    setChangePasswordDone,
  } = useProgressBarContext();

  const { setFirstName, setLastName, setImageURL } = useStateShareContext();

  // };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await instance.post("/auth/login/", {
        registration_number: registrationNumber,
        password: password,
      });

      createNewCookie("temporaryEmail", response.data.user.temporary_email);

      createNewCookie("access_token", response.data.access);
      createNewCookie("refresh_token", response.data.refresh);
      // alert("access_token", response.data.access);

      // setting first name, last name and imageURL in LOCAL STORAGE
      setFirstName(response.data.user.first_name);
      setLastName(response.data.user.last_name);
      setImageURL(response.data.user.profile_picture_absolute ?? Vini);
      setDarkMode(response.data.user.dark_mode);

      // navigating to onboarding
      const isVerified = response.data.user.is_verified;
      const passwordChanged = response.data.user.password_changed;
      const profileCompleted = response.data.user.profile_completed;
      const detailsFilled = response.data.user.details_filled;

      setVerifyDone(isVerified);
      setFillDetailsDone(detailsFilled);
      setChangePasswordDone(passwordChanged);
      setProfileDone(profileCompleted);

      if (isVerified) setVerifyDone(true);
      if (detailsFilled) setFillDetailsDone(true);
      if (profileCompleted) setProfileDone(true);
      if (passwordChanged) setChangePasswordDone(true);

      switch (false) {
        case isVerified:
          navigate("/onboarding/verify-email");
          break;
        case detailsFilled:
          navigate("/onboarding/fill-details");
          break;
        case profileCompleted:
          navigate("/onboarding/complete-profile");
          break;
        case passwordChanged:
          navigate("/onboarding/change-password");
          break;
        default:
          toast.success("Logged in successfully.");
          navigate("/manage-work");
      }
      // i;
      // navigate("/home");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 400:
            setError(`${message}`);
            break;
          case 401:
            setError(`${message}`);
            break;
          case 500:
            setError(`Server Error: Internal Server Error.`);
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
  };
  return (
    // <form onSubmit={handleUserLogin} className="lg:w-[35rem] w-full px-5">
    <form onSubmit={handleUserLogin} className="lg:w-[35rem] w-full px-5">
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <h1 className="text-center text-[29px] lg:text-[35px] ">Login</h1>
      <div className="mb-3 mt-5">
        <label className=" text-[14px] lg:text-[15px] font-semibold">
          Registration Number <span className="text-red-600">*</span>
        </label>
        <input
          onChange={(e) => setRegistrationNumber(e.target.value)}
          className="text-[14px] lg:text-[15px] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg"
          type="text"
          value={registrationNumber}
          name="username"
          placeholder="Enter Registration No."
        ></input>
      </div>
      <div className="mb-3 mt-5">
        <label className=" text-[14px] lg:text-[15px] font-semibold">
          Password <span className="text-red-600">*</span>
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="text-[14px] lg:text-[15px] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg"
          type="password"
          value={password}
          name="password"
          placeholder="Enter password"
        ></input>
        <p className="text-[12px] lg:text-[13px] mt-1 ">
          Password is case sensitive
        </p>
      </div>
      <div className="pb-5">
        <button
          type="submit"
          className="shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-[14px] lg:text-[15px] transition-colors 
                duration-300 hover:bg-neutral-600 bg-chocolate mt-5 text-white rounded-lg py-2 "
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between px-12 md:px-4">
        <NavLink
          to="/forgot-password"
          className="text-[14px] lg:text-[15px] md:inline block underline mb-2 md:mb-0 hover:text-blue-700 transition-colors duration-300"
          href="#"
        >
          Forgot Password?
        </NavLink>
        {/* <a
          onClick={() => navigate("/signup")}
          className="text-[1rem] underline hover:text-blue-700 transition-colors duration-300 "
          href="#"
        >
          Create An Account
        </a> */}
      </div>
    </form>
  );
};

export default LoginForm;
