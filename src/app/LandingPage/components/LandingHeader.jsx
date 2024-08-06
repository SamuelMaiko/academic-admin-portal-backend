// import React from 'react'
import { styled } from "styled-components";
import homePicture from "../../../assets/images/home-picture1.jpg";
import UnderBg from "../../../assets/images/bg-banner.png";
import { useNavigate } from "react-router-dom";
const HOME_PICTURE = homePicture;
const LandingHeader = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/signup");
  };
  return (
    <div className="h-screen w-full">
      <div className=" w-[100%] md:w-[90%] m-auto h-full flex lg:static justify-center">
        {/* <div className="absolute top-[12.2rem] z-50 bg-[rgba(245,245,220,0.5)]  h-[13rem] w-[95%] left-1/2 -translate-x-1/2"></div> */}
        <section
          className="z-[2] h-screen lg:h-fit relative bg-[rgba(245,245,220,0.5)] lg:absolute 
        pt-[34vh] md:pt-0 mt-[8.5rem] md:mt-[16rem] lg:mt-0 w-[100%] mx-auto md:w-[48rem] md:bg-transparent
         flex-wrap lg:flex-nowrap lg:m-0 lg:left-24 -top-[8.5rem] lg:top-80  lg:w-[45%] px-[2rem] md:px-0 "
        >
          <p className="md:text-[2.5rem] text-[30px] font-bold font-opensans lg:font-opensans text-chocolate">
            Welcome to Techwave writers self-Service Portal
          </p>
          <small className="text-[1rem] leading-9">
            Access our services easily and quickly. Create an account and get to
            enjoy Techwave writers online services.
          </small>
          <div className="md:ml-20 lg:ml-0 flex flex-col items  md:block">
            <button
              onClick={() => navigate("/login")}
              className="rounded-3xl lg:hidden px-5 py-2 mt-4 bg-green-600 text-white text-[19px]
             hover:bg-green-700 transition-colors duration-300"
            >
              Login
            </button>
            <button
              onClick={handleCreateAccount}
              className="md:ml-7 rounded-3xl px-5 py-2 mt-4 border-chocolate border-[1px] text-chocolate
               font-semibold text-[19px] lg:text-[1.05rem] hover:bg-gray-200 transition-colors duration-300"
            >
              Create account
            </button>
          </div>
        </section>

        <Div
          className="absolute   w-[28rem] h-[28rem] right-20 lg:right-24 top-52 lg:top-36 
        rounded-full p-4  lg:inline-block "
        ></Div>
        <Div2 className="absolute left-64 top-10 opacity-[0.2] w-[28rem] h-[28rem] "></Div2>
      </div>
    </div>
  );
};

const Div = styled.div`
  // background-color:blue;
  background: url(${HOME_PICTURE});
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0px 0px 10px #f5f5dc;
`;
const Div2 = styled.div`
  // background-color:blue;
  background: url(${UnderBg});
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  box-shadow: inset 0px 0px 10px #f5f5dc;
`;

export default LandingHeader;
