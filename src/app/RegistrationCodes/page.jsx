import React from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import { useStateShareContext } from "../../Context/StateContext";
import TableRegistrationCodes from "./components/TableRegistrationCodes";

const RegistrationCodes = () => {
  const { darkMode } = useStateShareContext();

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] ${
        darkMode ? "dark" : ""
      } dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader
        title="Manage Users"
        subTitle={
          "Create, edit, delete, or deactivate users. Oversee all user accounts here."
        }
      />
      <div>
        <TableRegistrationCodes />
      </div>
    </div>
  );
};

export default RegistrationCodes;
