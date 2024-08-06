import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useStateShareContext } from "../../../Context/StateContext";
import LogoLight from "../../../assets/LogoLight.png";
import { List } from "phosphor-react";
import MobileNavBar from "./MobileNavBar";

const NAV_LINKS = [
  {
    linkName: "Home",
    link: "/",
  },
  {
    linkName: "Services",
    link: "#",
  },
  {
    linkName: "Contact",
    link: "#",
  },
  {
    linkName: "FAQs",
    link: "#",
  },
];
const LandingNavBar = () => {
  const { setShowMobileNavBar, darkMode, AreasToHideMobileNavBar } =
    useStateShareContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogin = () => {
    setShowMobileNavBar((current) => !current);
    navigate("/login");
  };

  return (
    <div
      className=" z-10 w-full h-[5.7rem] md:bg-secondary text-tcolor 
    shadow-[0_2px_8px_rgba(0,0,0,0.1)] lg:shadow-[0_0_4px_rgba(0,0,0,0.2)]"
    >
      <div className="w-full md:w-[90%] h-full mx-auto flex justify-between items-center lg:pr-6 ">
        {/* logo */}
        <div className="h-[2.7rem] w-[9rem] md:w-[11rem] ">
          <img
            className="w-full h-full object-cover object-center"
            src={LogoLight}
            alt=""
          />
        </div>
        <ul
          className={` lg:visible hidden md:block transition-all duration-500 absolute left-10 h-[100vh] w-[30rem] lg:h-fit top-0 
          right-0 bottom-0 z-10 lg:w-fit lg:flex lg:static gap-20 items-center font-semibold text-[1rem]
           bg-black md:bg-transparent`}
        >
          {NAV_LINKS.map((navLink, index) => {
            return (
              <li
                onClick={() => setShowMobileNavBar((current) => !current)}
                className="mb-0 lg:mb-0 mt-0 lg:mt-0 lg:p-0 py-3 px-3  rounded-md lg:hover:text-hover
                 hover:bg-gray-200 lg:hover:bg-transparent cursor-pointer transition-colors duration-300"
                key={index}
              >
                <NavLink to={navLink.link}>{navLink.linkName}</NavLink>
              </li>
            );
          })}
          <button
            onClick={handleLogin}
            className="bg-chocolate text-white hover:bg-neutral-600 rounded-3xl px-5 py-2 mt-7 lg:mt-0 font-medium
             text-[1.1rem] transition-colors duration-300 "
          >
            Login
          </button>
        </ul>
        <button
          className={`${
            pathname == "/login" || pathname == "/signup" ? " " : "hidden"
          } hidden text-white hover:bg-primary rounded-3xl md:px-5 py-2 font-normal text-md lg:text-lg
           underline bg-[rgba(128,0,0,0.7)] mr-16 lg:mr-0`}
        >
          Back to home
        </button>
        <div
          onClick={() => setShowMobileNavBar(true)}
          className="lg:hidden  z-20 cursor-pointer right-0 text-3xl duration-500 mr-7 p-1 "
        >
          {/* nav menu icon */}
          {/* show during forgot password process */}
          <button className={`${AreasToHideMobileNavBar ? "hidden" : ""} p-1`}>
            <List size={32} />
          </button>
          {/* show during forgot password process */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/login");
            }}
            className={`bg-chocolate text-white hover:bg-neutral-600 rounded-3xl px-5 py-1 lg:mt-0 font-medium
             text-[1.1rem] transition-colors duration-300 ${
               AreasToHideMobileNavBar ? "" : "hidden"
             }`}
          >
            Login
          </button>
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
};

export default LandingNavBar;
