import React, { useEffect, useRef } from "react";
import FilterDropDownBlock from "./FilterDropDownBlock";
import { useStateShareContext } from "../../../Context/StateContext";

const FilterDropDown = ({ showDropDown, setShowDropDown }) => {
  const { filters } = useStateShareContext();
  const filterRef = useRef(null);

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={filterRef}
      className={`${
        showDropDown ? "" : "hidden"
      } absolute top-[95%] left-0  z-50 bg-gray-50 dark:bg-darkMode-bars border-[1px] dark:border-gray-500
       border-gray-300 w-[11rem]  h-[14rem] rounded-lg shadow-[2px_2px_6px_rgba(0,0,0,0.04)]
     text-gray-600 dark:text-neutral-200 overflow-hidden`}
    >
      {filters &&
        filters.map((filter, index) => {
          if (!filter.active)
            return (
              <FilterDropDownBlock
                setShowDropDown={setShowDropDown}
                key={index}
                {...filter}
              />
            );
        })}
    </div>
  );
};

export default FilterDropDown;
