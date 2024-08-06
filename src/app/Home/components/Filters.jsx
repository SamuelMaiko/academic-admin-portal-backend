import React, { useEffect, useState } from "react";
import FilterPelet from "./FilterPelet";
import { Plus } from "lucide-react";
import FilterDropDown from "./FilterDropDown";
import { useStateShareContext } from "../../../Context/StateContext";

const Filters = () => {
  const { filters, setFilters } = useStateShareContext();
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="flex items-center gap-2 mt-3 overflow-x-scroll md:overflow-hidden  filter ">
      {filters &&
        filters.map((filter, index) => {
          if (filter.active)
            return <FilterPelet key={index} title={filter.title} />;
        })}

      <div className="">
        {/* The add filter button */}
        <button
          onClick={() => setShowDropDown((current) => !current)}
          className="text-sm flex items-center gap-1 hover:g-gray-100 border-gray-300
        border-[1px] rounded-xl px-2 py-[2px] text-gray-600 dark:text-neutral-200"
        >
          <span>
            <Plus size={16} />
          </span>
          <span className="whitespace-nowrap">Add Filter</span>
        </button>
        <FilterDropDown
          showDropDown={showDropDown}
          setShowDropDown={setShowDropDown}
        />
      </div>
    </div>
  );
};

export default Filters;
