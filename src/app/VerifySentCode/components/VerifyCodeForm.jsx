import { Check, CircleCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import {
  createNewCookie,
  deleteCookie,
  getCookie,
} from "../../../Cookies/Cookie";
import ResendOTPButton from "./ResendOTPButton";

const VerifyCodeForm = () => {
  const [showResendSuccess, setShowResendSuccess] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [code, setCode] = useState("");

  const email = getCookie("forgotEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setShowResendSuccess(false);

    try {
      const response = await instance.post("/auth/reset-password-verify-otp/", {
        email,
        otp: code,
      });
      toast.success("OTP verified successfully!");
      createNewCookie("tempToken", response.data.temp_token);
      // deleting to prevent user accessing this page after moving forward or using this route. Reason: useEffect checks its availability
      deleteCookie("forgotEmail");
      navigate("/new-password");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 400:
            setError(` ${message.error}`);
            toast.warning(` ${message.error}`);
            break;
          case 404:
            setError(` ${message.error}`);
            toast.warning(` ${message.error}`);
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
  };

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative w-full md:w-[27%] p-6 rounded-lg md:shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
      >
        {error && (
          <p className="text-red-500 hidden absolute -top-8">{error}</p>
        )}
        {success && (
          <p className="text-green-500 hidden absolute -top-8">{success}</p>
        )}
        <p
          className={`${
            showResendSuccess ? "" : "hidden"
          } absolute flex items-center gap-1 -top-4 md:-top-7 text-left text-green-500 text-sm`}
        >
          <span>
            <CircleCheck size={21} />
          </span>
          <span>We&apos;ve sent you another code.</span>
        </p>
        <h1 className="text-[25px] font-semibold mb-2">
          Enter the 6-digit code
        </h1>
        <p className="text-sm my-4 text-gray-600">
          Check <span className="font-semibold">{email}</span> for the
          verification code.
        </p>
        <div className="">
          <div className="mt-1">
            <input
              placeholder="6-digit code"
              type="text"
              className="placeholder-custom flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 text-2xl tracking-[0.2em] py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 placeholder:text-md focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <ResendOTPButton
            setShowResendSuccess={setShowResendSuccess}
            setError={setError}
          />
        </div>
        <button
          type="submit"
          className="transition-colors duration-300 hover:bg-blue-600 mt-5
         bg-blue-500 text-white py-3 px-3 rounded-3xl w-full font-medium "
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        <p className="text-[13px] my-5 text-gray-500">
          If you don’t see the email in your inbox, check your spam folder. If
          it’s not there, the email address may not be confirmed, or it may not
          match an existing Techwave account.
        </p>
      </form>
    </>
  );
};

export default VerifyCodeForm;
