import React, { useEffect, useState } from "react";
import ContactInfoDetail from "./ContactInfoDetail";
import { Phone, EnvelopeSimple, LinkedinLogo } from "phosphor-react";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";

const ContactInfo = () => {
  const [loading, setLoading] = useState(false);
  const { contactInfo, setContactInfo } = useProgressBarContext();

  const getContactInfo = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/profile/contact/");
      setContactInfo(response.data);
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

  useEffect(() => {
    getContactInfo();
  }, []);

  return (
    <div
      className="mt-3 min-h-[6rem] mx-auto flex flex-col justify-center p-5 
      md:shadow-[2px_2px_13px_rgba(0,0,0,0.1)] shadow-[2px_2px_13px_rgba(0,0,0,0.07)]
       dark:shadow-gray-600 bg-white md:rounded-[1rem]
       w-full md:w-[95%] dark:text-darkMode-text dark:bg-darkMode-body px-6 md:px-5"
    >
      <h1 className="text-lg font-semibold mb-3">Contact Information</h1>
      <ContactInfoDetail
        icon={<Phone size={24} />}
        title="Phone"
        detail={contactInfo.phone_number}
      />
      <ContactInfoDetail
        icon={<EnvelopeSimple size={24} />}
        title="Email"
        detail={contactInfo.email}
      />
      <ContactInfoDetail
        icon={<LinkedinLogo size={24} />}
        title="LinkedIn"
        detail={contactInfo.linkedin || "Not available"}
      />
    </div>
  );
};

export default ContactInfo;
