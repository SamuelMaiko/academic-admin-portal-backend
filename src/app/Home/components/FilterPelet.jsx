import { X } from "lucide-react";
import React from "react";
import { useStateShareContext } from "../../../Context/StateContext";
import { useNavigate } from "react-router-dom";

const FilterPelet = ({ title }) => {
  const { filters, setFilters } = useStateShareContext();
  const navigate = useNavigate();

  const handleRemoveFilter = () => {
    const updated_filters = filters.map((filter) => {
      if (filter.title == title) {
        const sparams = new URLSearchParams(location.search);
        // sparams.de
        sparams.delete(filter.type);
        navigate(`?${sparams.toString()}`);
        return { ...filter, active: false };
      }
      return filter;
    });
    setFilters(updated_filters);
  };
  return (
    <div
      className="text-sm flex items-center gap-1 hover:g-gray-100 border-gray-300
       border-[1px] rounded-xl px-2 text-gray-600 dark:text-neutral-200 w-fit"
    >
      <span className="py-[2px] whitespace-nowrap">{title}</span>
      <button
        onClick={handleRemoveFilter}
        className="border-l-gray-300 border-l-[1px] py-[2px] pl-1"
      >
        <X size={15} />
      </button>
    </div>
  );
};

export default FilterPelet;
