import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStateShareContext } from "../../../../Context/StateContext";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const ButtonStyles = cva(
  ["transition-colors duration-300 hover:text-sidebartext-hover"],
  {
    variants: {
      variant: {
        default: [""],
      },
      buttonType: {
        iconTextBtn: [
          `flex items-center 
      } mb-2 p-[0.6rem]`,
        ],
        roundedIconBtn: [
          "hover:text-black hover:bg-neutral-100",
          "rounded-full p-2 ",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
      // buttonType: "iconTextBtn",
    },
  }
);

const Button = ({
  children,
  onClick = () => {},
  className = "",
  icon,
  title = "None",
  buttonType = "iconTextBtn",
}) => {
  const { shrinkSideBar } = useStateShareContext();
  //   const [shrinkSideBar, setShrinkSideBar] = useState(false);
  return (
    <button
      onClick={onClick}
      // className={` flex items-center ${className} ${
      //   shrinkSideBar ? "" : "w-full"
      // } mb-2 p-[0.6rem] hover:text-red-500 transition-colors duration-300`}
      className={twMerge(
        ButtonStyles({ buttonType }),
        className,
        `${!shrinkSideBar && buttonType == "iconTextButton" ? "w-full" : ""}`
      )}
    >
      {buttonType == "iconTextBtn" ? (
        <>
          <span>{icon}</span>
          <span
            className={`${
              shrinkSideBar ? "hidden" : ""
            } ml-4 text-sm font-medium `}
          >
            {title}
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default Button;
