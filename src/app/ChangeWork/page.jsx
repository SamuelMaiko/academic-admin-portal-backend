import React, { useState } from "react";
import PageHeader from "../../SharedComponents/PageHeader";
import ChangeWorkForm from "./components/ChangeWorkForm";
import { useStateShareContext } from "../../Context/StateContext";
import CarouselComponent from "./components/CarouselComponent ";
import { X } from "lucide-react";
import { ArrowLeft } from "phosphor-react";
import Chimp from "../../assets/gpt-redesign-5.webp";

const ChangeWork = () => {
  const { showCarouselModal, setShowCarouselModal } = useStateShareContext();

  return (
    <div
      className={`w-full px-[1rem] md:px-[2rem] dark:bg-darkMode-body min-h-screen `}
    >
      <PageHeader title="Change work" subTitle={"Edit work details."} />

      <ChangeWorkForm />

      {/* carousel modal */}
      <div
        className={`${
          showCarouselModal ? "" : "hidden"
        } fixed inset-0 z-[110] bg-[rgba(0,0,0,0.3)] dark:bg-[rgba(0,0,0,0.6)] backdrop-blur-md`}
      >
        <div
          className="absolute w-[100vw] md:w-[60%] h-[100%] left-[50%]
     translate-x-[-50%] top-[50%] translate-y-[-50%] dark:bg-darkMode-body
      dark:text-darkMode-text bg-transparent flex items-center 
     "
        >
          <CarouselComponent images={[{ image: Chimp }, { image: Chimp }]} />
          {/* cancel button */}
          <button
            onClick={() => setShowCarouselModal(false)}
            className="rounded-full p-2 absolute
             top-3 -right-[30%] text-white hidden md:block"
          >
            <X size={24} />
          </button>
          {/* back button for mobile */}
          <button
            onClick={() => setShowCarouselModal(false)}
            className="rounded-full p-2 absolute
             top-3 left-0 text-white block md:hidden"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeWork;
