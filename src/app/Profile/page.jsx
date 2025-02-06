import React, { useState } from "react";
import { Pencil } from "phosphor-react";
import Bio from "./components/Bio";
import ProfilePhoto from "./components/ProfilePhoto";
import ContactInfo from "./components/ContactInfo";
import Analytics from "./components/Analytics";
import instance from "../../axios/instance";
import { toast } from "react-toastify";
import { useProgressBarContext } from "../../Context/ProgressBarContext";
import EditInfoForm from "./components/EditInfoForm";
import profilePage from "../../assets/profilePage.png";
import getProfile from "./api/getProfile";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const { profile, setProfile } = useProgressBarContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [county, setCounty] = useState("");

  useState(() => {
    setLoading(true);
    getProfile().then((data) => {
      setProfile(data);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setPhoneNumber(data.phone_number);
      setEmail(data.email);
      setCountry(data.country);
      setCounty(data.county);

      setLoading(false);
    });
  }, []);
  return (
    <div className="w-full md:px-[1rem] dark:bg-darkMode-body flex justify-between h-fit pb-[5rem]">
      <div className="relative bg flex-1  hidden md:block">
        <img
          src={profilePage}
          alt="profile page decorator"
          className="w-[90%] h-auto"
        />
        <div className="absolute inset-0 bg-gray-200 opacity-[0.6] bottom-0"></div>
      </div>
      <div className="flex-1 h-full ">
        <ProfilePhoto />
        <EditInfoForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          country={country}
          setCountry={setCountry}
          county={county}
          setCounty={setCounty}
        />
      </div>
    </div>
  );
};

export default Profile;
