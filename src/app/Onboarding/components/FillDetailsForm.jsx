import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { createNewCookie, getCookie } from "../../../Cookies/Cookie";

const FillDetailsForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [county, setCounty] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { setFillDetailsDone } = useProgressBarContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await instance.put("/onboarding/fill-details/", {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        country,
        county,
      });

      // setSuccess(response.data.message);
      toast.success("Details updated successfully.");

      // updating the cookie to show they have completed the step
      createNewCookie("fillDetailsDone", true);
      setFillDetailsDone(true);

      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);

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
        console.log(error.response.data);

        switch (status) {
          case 400:
            setError(`${message}`);
            toast.warning(`${message}`);
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
  };

  // filling details on page load
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await instance.get("/onboarding/details/");
    const data = response.data;
    setFirstName(data.first_name);
    setLastName(data.last_name);
    setPhoneNumber(data.phone_number);
    setCountry(data.country);
    setCounty(data.county);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col items-center flex-1 "
    >
      {error && <p className="text-red-500 hidden mb-3">{error}</p>}
      {success && <p className="text-green-500 hidden mb-3">{success}</p>}
      <div className="relative w-[97%] md:w-[60%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border outline-none "
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          First Name
        </label>
      </div>
      <div className="relative w-[97%] md:w-[60%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border text-sm outline-none"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name" // Placeholder added for clarity
          required
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Last Name
        </label>
      </div>

      <div className="relative w-[97%] md:w-[60%] mb-5">
        <input
          type="text"
          className="pl-4 h-[3.2rem] w-full border-gray-300 border text-sm outline-none"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number" // Placeholder added for clarity
          required
        />
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          Phone Number
        </label>
      </div>

      <div className="relative w-[97%] md:w-[60%] mb-5">
        <select
          className="pl-4 h-[3.2rem] w-full border-gray-300 border text-sm outline-none"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select Country</option>
          <option value="Kenya">Kenya</option>
        </select>
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          County
        </label>
      </div>

      <div className="relative w-[97%] md:w-[60%] mb-5">
        <select
          className="pl-4 h-[3.2rem] w-full border-gray-300 border text-sm outline-none"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          required
        >
          <option value="">Select County</option>
          <option value="Kisii">Kisii</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Nakuru">Nakuru</option>
        </select>
        <label className="absolute bg-white -top-2 left-4 px-1 text-gray-600 text-sm">
          County
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-3 md:py-4 mt-4 rounded-md bg-blue-500 text-white font-medium block"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Save Details"}
      </button>
    </form>
  );
};

export default FillDetailsForm;
