import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { useStateShareContext } from "../../../Context/StateContext";

const SignUpForm = () => {
  const [registrationCode, setRegistrationCode] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { success, setSuccess } = useStateShareContext("");
  const navigate = useNavigate();

  const handleUserSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await instance.post("/auth/register/", {
        registration_code: registrationCode,
        email: email,
      });

      setSuccess(
        "Registration successful! Check your email for credentials in a few seconds."
      );
      toast.success(
        "Registration successful! Check your email for credentials in a few seconds."
      );
      // toast.success("success");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 400:
            setError(`Bad Request: ${message}`);
            toast.warning(`${message}`);
            break;
          case 404:
            setError(`Not Found: ${message}`);
            toast.warning(` ${message}`);
            break;
          case 500:
            setError(`Server Error: ${message}`);
            toast.error(`Internal Server Error.`);
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
    <form onSubmit={handleUserSignUp} className="w-[35rem] px-5">
      <p className="text-blue-500 font-bold">
        For testing purposes:{" "}
        <a
          className="text-green-500 font-normal underline"
          target="_blank"
          href="https://techwavewriters.pythonanywhere.com/api/auth/test-registration-codes/"
        >
          Get Registration code
        </a>
      </p>
      {error && <p className="text-red-500 hidden">{error}</p>}
      <h1 className="text-center text-[2.3rem] font-prompt">SignUp</h1>
      <div className="mb-3 mt-5">
        <label className=" text-[1rem] font-semibold">
          Registration code <span className="text-red-600">*</span>
        </label>
        <input
          className="text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg"
          type="text"
          value={registrationCode}
          onChange={(e) => setRegistrationCode(e.target.value)}
          name="registration_code"
          placeholder="Enter Registration code."
          required
        ></input>
      </div>
      <div className="mb-3 mt-5">
        <label className=" text-[1rem] font-semibold">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          className="text-[1rem] shadow-[0_0_4px_rgba(0,0,0,0.3)] mt-2 outline-none h-[3rem] pl-3 w-full rounded-lg mb-1"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Enter Email"
          required
        ></input>
        <small className="font-medium">
          Your email is used only for receiving credentials and won&apos;t be
          added to your account.
        </small>
      </div>
      <div className="pb-5">
        <button
          type="submit"
          className="shadow-[0_0_4px_rgba(0,0,0,0.15)] w-full text-center text-xl  hover:bg-hover 
                transition-colors duration-300 bg-chocolate mt-5 text-white rounded-lg py-2 "
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "SignUp"}
        </button>
      </div>
      <div className="flex pl-4">
        <p className="text-[1rem]" href="#">
          Already Have An Account?{" "}
        </p>
        <a
          onClick={() => navigate("/login")}
          className="no-underline text-[1rem] ml-2 font-semibold hover:text-hover transition-colors duration-300"
          href="#"
        >
          Login
        </a>
      </div>
    </form>
  );
};

export default SignUpForm;
