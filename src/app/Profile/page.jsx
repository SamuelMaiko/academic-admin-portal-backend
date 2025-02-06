import React, { useState } from "react";
import { Pencil } from "phosphor-react";
import Bio from "./components/Bio";
import UserInfo from "./components/UserInfo";
import ContactInfo from "./components/ContactInfo";
import Analytics from "./components/Analytics";
import instance from "../../axios/instance";
import { toast } from "react-toastify";
import { useProgressBarContext } from "../../Context/ProgressBarContext";
import EditInfoForm from "./components/EditInfoForm";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { profile, setProfile } = useProgressBarContext();

  const getProfile = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/profile/");
      setProfile(response.data);
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
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  useState(() => {
    // getProfile();
  }, []);
  return (
    <div className="w-full md:px-[1rem] pb-5 dark:bg-darkMode-body">
      <div className="relative bg-black w-full h-[12rem] md:h-[17rem] md:rounded-[2rem]">
        {/* user info */}
        <UserInfo
          firstName={profile.first_name}
          lastName={profile.last_name}
          regNo={profile.registration_number}
          county={profile.county}
          role={profile.role}
        />
      </div>
      {/* <Bio bio={profile.bio_with_emojis} /> */}
      {/* <Analytics /> */}
      <ContactInfo />
      {/* <EditInfoForm /> */}
    </div>
  );
};

export default Profile;
