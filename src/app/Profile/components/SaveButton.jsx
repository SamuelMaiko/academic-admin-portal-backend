import React, { useState } from "react";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useStateShareContext } from "../../../Context/StateContext";

const SaveButton = ({
  firstName,
  lastName,
  bio,
  phoneNumber,
  email,
  linkedIn,
  county,
  country,
}) => {
  const [loading, setLoading] = useState(false);
  const { setProfile, setContactInfo } = useProgressBarContext();
  const { setShowEditInfoModal, setFirstName, setLastName } =
    useStateShareContext();

  const handleUpdateDetails = async () => {
    setLoading(true);
    try {
      const response = await instance.put("/profile/update/", {
        first_name: firstName,
        last_name: lastName,
        bio,
        phone_number: phoneNumber,
        email,
        linkedin: linkedIn,
        country,
        county,
      });
      setProfile((current) => ({ ...current, ...response.data }));
      setContactInfo((current) => ({ ...current, ...response.data }));
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      toast.success("Details saved.");
      setShowEditInfoModal(false);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
          case 400:
            console.log(message);
            break;
          case 500:
            toast.error(`Internal server error`);
            break;
        }
      } else {
        toast.error(
          "An unexpected error occurred. Please try again later.",
          error
        );
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={handleUpdateDetails}
      type="button"
      className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300
         dark:bg-darkMode-cardButton dark:hover:bg-darkMode-cardButtonHover
          dark:text-darkMode-cardButtonT dark:hover:text-darkMode-cardButtonTHov
           rounded-2xl font-semibold  py-1 px-5 text-white"
      disabled={loading}
    >
      {loading ? "Saving..." : "Save"}
    </button>
  );
};
export default SaveButton;
