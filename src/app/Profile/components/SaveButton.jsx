import React, { useState } from "react";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useStateShareContext } from "../../../Context/StateContext";
import updateDetails from "../api/updateDetails";

const SaveButton = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  county,
  country,
}) => {
  const [loading, setLoading] = useState(false);
  const { setProfile, setContactInfo } = useProgressBarContext();
  const { setShowEditInfoModal, setFirstName, setLastName } =
    useStateShareContext();

  const handleUpdate = () => {
    setLoading(true);
    const updatedData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email,
      country,
      county,
    };
    updateDetails(updatedData).then((data) => {
      setProfile((current) => ({ ...current, ...data }));
      setContactInfo((current) => ({ ...current, ...data }));
      setFirstName(data.first_name);
      setLastName(data.last_name);
      toast.success("Details saved.", { autoClose: 2000 });

      setLoading(false);
    });
  };
  return (
    <button
      onClick={handleUpdate}
      type="button"
      className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300
         dark:bg-darkMode-cardButton dark:hover:bg-darkMode-cardButtonHover
          dark:text-darkMode-cardButtonT dark:hover:text-darkMode-cardButtonTHov
           font-semibold  py-2 lg:py-4 px-7 lg:px-10 text-white uppercase mt-14"
      disabled={loading}
    >
      {loading ? "Saving..." : "Save"}
    </button>
  );
};
export default SaveButton;
