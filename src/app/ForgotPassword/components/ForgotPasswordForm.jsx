import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { createNewCookie } from "../../../Cookies/Cookie";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await instance.post("/auth/reset-password/", {
        email,
      });
      toast.success(
        "An OTP has been sent to your email, expires in 5 minutes!"
      );
      createNewCookie("forgotEmail", email);
      navigate("/verify-sent-code");
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
            toast.warning(` ${message.message}`);
            setError(` ${message.message}`);
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

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[27%] p-6 rounded-lg md:shadow-[0_2px_12px_rgba(0,0,0,0.2)] relative"
    >
      {error && (
        <p className="text-red-500 hidden absolute -top-12 ">{error}</p>
      )}
      {success && (
        <p className="text-green-500 hidden absolute -top-12">{success}</p>
      )}
      <h1 className="text-[25px] font-semibold mb-2">Forgot password</h1>
      <div className="">
        <label className=" text-sm text-neutral-500 dark:text-darkMode-gray">
          Email
        </label>
        <div className="mt-1">
          <input
            placeholder="Email"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <p className="text-[13px] my-5 text-gray-600">
        We’ll send a verification code to this email if it matches an existing
        Techwave account.
      </p>
      <button
        type="submit"
        className="transition-colors duration-300 hover:bg-blue-600
         bg-blue-500 text-white py-3 px-3 rounded-3xl w-full font-medium text-sm"
        disabled={loading}
      >
        {loading ? "Loading..." : "Next"}
      </button>
      <div className="w-full flex justify-center">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="hover:bg-gray-300 mt-4 px-1 text-sm hover:underline rounded-lg"
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
