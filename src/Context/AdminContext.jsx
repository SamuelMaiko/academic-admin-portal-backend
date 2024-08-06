import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import instance from "../axios/instance";

const createdAdminContext = createContext();
export const useAdminContext = () => useContext(createdAdminContext);

const AdminContext = ({ children }) => {
  const [showChooseWriterModal, setShowChooseWriterModal] = useState(false);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [showDeactivateUserModal, setShowDeactivateUserModal] = useState(false);
  const [writer, setWriter] = useState(null);
  const [writerName, setWriterName] = useState("");

  return (
    <createdAdminContext.Provider
      value={{
        showChooseWriterModal,
        setShowChooseWriterModal,
        writer,
        setWriter,
        writerName,
        setWriterName,
        showDeleteUserModal,
        setShowDeleteUserModal,
        showDeactivateUserModal,
        setShowDeactivateUserModal,
      }}
    >
      {children}
    </createdAdminContext.Provider>
  );
};

AdminContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminContext;
