import { styled } from "styled-components";
import SignupImg from "../../assets/images/home-picture4.jpg";
import LandingNavBar from "../LandingPage/components/LandingNavBar";
import { useStateShareContext } from "../../Context/StateContext";
import SignUpForm from "./components/SignUpForm";
const SIGNUP_IMAGE = SignupImg;
const SignUp = () => {
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
          <SignupImage className="absolute w-[28rem] h-[28rem] left-2 top-24 rounded-full p-4 "></SignupImage>
        </section>
        <section className="lg:w-[50%] w-full md:w-[80%] mx-auto lg:mx-0 h-full flex justify-center lg:mt-10 mt-4">
          <SignUpForm />
        </section>
      </div>
    </div>
  );
};

const SignupImage = styled.div`
  // background-color:blue;
  background: url(${SIGNUP_IMAGE});
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  box-shadow: inset 0px 0px 10px #f5f5dc;
`;
export default SignUp;
