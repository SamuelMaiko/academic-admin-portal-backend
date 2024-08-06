// import React from 'react'
import { styled } from "styled-components";
import LowerImg from "../../assets/images/home-picture3.jpg";
import * as React from "react";
import axios from "axios";
import instance from "../../axios/instance";
import { toast } from "react-toastify";
import { createNewCookie } from "../../Cookies/Cookie";
import { useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../Context/StateContext";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import LoginForm from "./components/LoginForm";
const LOWER_IMAGE = LowerImg;

const Login = () => {
  const { show } = useStateShareContext();
  return (
    <div className="relative w-full h-[98vh] overflow-hidden ">
      <LandingNavBar />
      <div
        className={`${
          show ? "visible" : "invisible opacity-0"
        } opacity-1 transition-all duration-500 absolute lg:hidden z-[4] bg-white right-0 left-0 bottom-0 top-[5rem]`}
      ></div>
      <div className="w-[98%] md:w-[90%] h-[screen-6rem] mx-auto flex justify-between">
        <section className="relative w-[50%] hidden lg:flex">
          <LowerImage className="absolute w-[28rem] h-[28rem] left-2 top-[5.6rem] rounded-full p-4 "></LowerImage>
        </section>
        <section className="lg:w-[50%] w-full md:w-[80%] mx-auto lg:mx-0 h-full flex justify-center lg:mt-20 mt-7">
          <LoginForm />
        </section>
      </div>
    </div>
  );
};
const LowerImage = styled.div`
  // background-color:blue;
  background: url(${LOWER_IMAGE});
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: inset 0px 0px 10px #f5f5dc;
`;

export default Login;
