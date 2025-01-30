import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import instance from "../axios/instance";

const createdAdminContext = createContext();
export const useAdminContext = () => useContext(createdAdminContext);

const AdminContext = ({ children }) => {
  const [showChooseWriterModal, setShowChooseWriterModal] = useState(false);
  const [showChooseWorkModal, setShowChooseWorkModal] = useState(false);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [showDeactivateUserModal, setShowDeactivateUserModal] = useState(false);
  const [showChangeImagesModal, setShowChangeImagesModal] = useState(false);
  const [showChangeFilesModal, setShowChangeFilesModal] = useState(false);
  const [writer, setWriter] = useState("");
  const [writerName, setWriterName] = useState("");
  const [work, setWork] = useState("");
  const [workCode, setWorkCode] = useState("");

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
        showChooseWorkModal,
        setShowChooseWorkModal,
        work,
        setWork,
        workCode,
        setWorkCode,
        showChangeImagesModal,
        setShowChangeImagesModal,
        showChangeFilesModal,
        setShowChangeFilesModal,
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
