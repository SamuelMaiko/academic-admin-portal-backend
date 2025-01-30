import React, { useState } from "react";
import { X } from "phosphor-react";
import EditBasicInfo from "./EditBasicInfo";
import EditLocation from "./EditLocation";
import EditContactInfo from "./EditContactInfo";
import { useStateShareContext } from "../../../Context/StateContext";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import SaveButton from "./SaveButton";

const EditInfoForm = () => {
  const { setShowEditInfoModal } = useStateShareContext();
  // const [details, setDetails] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [country, setCountry] = useState("");
  const [county, setCounty] = useState("");

  const getDetails = async () => {
    try {
      const response = await instance.get("/profile/update/");

      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setBio(response.data.bio_with_emojis);
      setPhoneNumber(response.data.phone_number);
      setEmail(response.data.email);
      setLinkedIn(response.data.linkedin);
      setCountry(response.data.country);
      setCounty(response.data.county);
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data;

        switch (status) {
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
    }
  };

  useState(() => {
    // getDetails();
  }, []);

  return (
    <div
      className="absolute w-full md:w-[60%] h-[34rem] rounded-lg  md:px-2 left-[50%]
     translate-x-[-50%] top-[50%] translate-y-[-50%] bg-bgcolor dark:bg-darkMode-body
      dark:text-darkMode-text     
     "
    >
      {/* header */}
      <div className="flex justify-between items-center py-3 px-4 border-b-neutral-300 border-b-[1px]">
        <p className="text-xl font-semibold">Edit info</p>
        {/* close button */}
        <button
          onClick={() => setShowEditInfoModal(false)}
          className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
        >
          <X size={24} />
        </button>
      </div>
      {/* central body */}
      <form className="h-[26rem] px-4 md:px-8 overflow-y-scroll">
        <p className="text-neutral-500 dark:text-darkMode-gray text-sm mt-4 mb-7">
          * Indicates required
        </p>
        <EditBasicInfo
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          bio={bio}
          setBio={setBio}
        />
        <EditLocation
          country={country}
          setCountry={setCountry}
          county={county}
          setCounty={setCounty}
        />
        <EditContactInfo
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          linkedIn={linkedIn}
          setLinkedIn={setLinkedIn}
        />
      </form>
      {/* footer */}
      <div className=" h-[3.9rem] flex items-center justify-between px-5">
        <div></div>
        <SaveButton
          firstName={firstName}
          lastName={lastName}
          bio={bio}
          phoneNumber={phoneNumber}
          email={email}
          linkedIn={linkedIn}
          country={country}
          county={county}
        />
      </div>
    </div>
  );
};

export default EditInfoForm;
