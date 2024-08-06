import { ArrowRight, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import instance from "../../../axios/instance";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "phosphor-react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredWorks, setFilteredWorks] = useState([]);
  const { loading, setLoading, error, setError, fetchWorks } =
    useProgressBarContext();
  const location = useLocation();
  const navigate = useNavigate();

  // Function to fetch works from the backend based on the search query

  // Effect to fetch works when searchQuery changes
  useEffect(() => {
    const parameters = new URLSearchParams(location.search);
    const query = parameters.get("search") || "";
    const words = parameters.get("words") || null;
    const deadline = parameters.get("deadline") || null;

    // alert(words);

    fetchWorks(query, words, deadline); // not
    setSearchQuery(query);
  }, [location.search]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const newparams = new URLSearchParams(location.search);
    newparams.set("search", query);
    // console.log(newparams);
    navigate(`?${newparams.toString()}`);
    // navigate(`?search=${encodeURIComponent(query)}`);
    if (query) {
      const words = newparams.get("words") || null;
      const deadline = newparams.get("deadline") || null;

      fetchWorks(query, words, deadline);
    }
  };

  // if they click enter
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full md:w-[33rem] text-black"
    >
      <input
        placeholder="Search by work code"
        type="text"
        className=" w-full h-[2.7rem] ps-12 pr-12 outline-none rounded-3xl border-[1px]
         border-gray-300 text-sm focus:bg-blue-50"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {/* search icon */}
      <Search
        size={19}
        className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400"
      />
      {/* submit btn */}
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-1 bg-blue-500 rounded-full p-2 text-white"
      >
        <ArrowRight size={20} className="" />
      </button>
      <button
        onClick={() => {
          handleSearchChange({ target: { value: "" } });
          const sparams = new URLSearchParams(location.search);
          sparams.set("search", "");
          navigate(`?${sparams.toString()}`);
          // setSearchQuery("");
        }}
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-[15%] md:right-[10%] hover:text-gray-500 transition-colors duration-300"
      >
        <X size={17} />
      </button>
    </form>
  );
};

export default SearchInput;
