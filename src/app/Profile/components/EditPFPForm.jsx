import React, { useEffect, useState } from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { ImageSquare, Trash, X } from "phosphor-react";
import Vini from "../../../assets/Default_pfp.jpg";
import instance from "../../../axios/instance";
import { toast } from "react-toastify";

const EditPFPForm = () => {
  const [uploadLoading, setUploadLoading] = useState(false);
  useEffect(() => {
    setUpload(imageURL);
  }, []);
  const {
    setShowEditPFPModal,
    setShowDeleteProfilePhotoModal,
    selectedFile,
    setSelectedFile,
    imageURL,
    setImageURL,
    upload,
    setUpload,
  } = useStateShareContext();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setUpload(url);
    }
  };

  const handleUpload = async () => {
    setUploadLoading(false);

    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("profile_picture", selectedFile);
        const response = await instance.put(
          "/profile/update/picture/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setImageURL(response.data.profile_picture_absolute);
        toast.success("Profile picture changed.");
      } catch (error) {
        if (error.response && error.response.status) {
          const status = error.response.status;
          const message = error.response.data;

          switch (status) {
            case 400:
              toast.error(message.profile_picture);
              break;
            case 500:
              toast.error(`Internal server error`);
              break;
          }
        } else {
          toast.error("An unexpected error occurred. Please try again later.");
        }
      } finally {
        // setting to NULL because I want to hide the buttons: "Upload","Remove"
        setSelectedFile(null);

        setUploadLoading(false);
      }
    } else {
      toast.warning("No file selected!");
    }
  };

  return (
    <div
      className="absolute w-full md:w-[56%] h-[25rem] md:h-[30rem] rounded-lg  px-2 left-[50%]
 translate-x-[-50%] top-[5%] bg-bgcolor dark:bg-darkMode-body
  dark:text-darkMode-text     
 "
    >
      <div>
        {/* header */}
        <div className="flex justify-between items-center py-3 px-4 ">
          <p className="text-xl font-semibold">Profile photo</p>
          {/* cancel button */}
          <button
            onClick={() => setShowEditPFPModal(false)}
            className="rounded-full hover:bg-neutral-200 dark:hover:bg-gray-600 p-2"
          >
            <X size={24} />
          </button>
        </div>
        {/* display the profile picture */}
        <div className="h-[16rem] md:h-[21.4rem] flex justify-center">
          <div
            className="size-[14rem] md:size-[19rem] rounded-full overflow-hidden border-2
           border-gray-300 flex items-center justify-center"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={!selectedFile ? imageURL : upload}
              alt="Profile Preview"
            />
          </div>
        </div>
        {/* footer */}
        <div
          className=" h-[4.5rem] text-black dark:text-darkMode-text flex items-center justify-around 
        px-5 border-t-neutral-300 dark:border-t-neutral-500 border-t-[1px]"
        >
          <div>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                handleFileChange(e);
                e.target.value = "";
              }}
            />
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="h-full px-2 flex flex-col items-center justify-center hover:bg-neutral-200 dark:hover:bg-gray-600 font-medium py-1"
            >
              <span>
                <ImageSquare size={25} weight="fill" />
              </span>
              <span>Upload new</span>
            </button>
            {selectedFile && (
              <div className="mt-2 flex gap-2">
                <button
                  onClick={handleUpload}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  disabled={uploadLoading}
                >
                  {uploadLoading ? "Uploading..." : "Upload"}
                </button>
                <button
                  onClick={() => {
                    setUpload(imageURL);
                    setSelectedFile(null);
                  }}
                  className={`bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600 ${
                    uploadLoading ? "hidden" : ""
                  }`}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowDeleteProfilePhotoModal(true)}
            className="h-full px-2 flex flex-col items-center hover:bg-neutral-200
           dark:hover:bg-gray-600 justify-center rounded-lg font-medium  py-1"
          >
            <span>
              <Trash size={25} weight="fill" />
            </span>
            <span>Delete</span>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EditPFPForm;
