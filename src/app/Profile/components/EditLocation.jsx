import React from "react";

const EditLocation = ({ country, setCountry, county, setCounty }) => {
  return (
    <div className="mt-10">
      <h1 className="text-xl md:text-2xl font-semibold">Location</h1>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Country*
        </label>
        <div className="mt-1">
          <select
            id="countries"
            className="dark:bg-darkMode-body border text-gray-900 dark:text-white rounded-lg block w-full p-2.5 border-gray-300
             bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none
              focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Kenya">Kenya</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          City/County
        </label>
        <div className="mt-1 ">
          <select
            id="counties"
            className="dark:bg-darkMode-body border text-gray-900 dark:text-white rounded-lg block w-full p-2.5 border-gray-300
             bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none
              focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          >
            <option value="Nairobi">Nairobi</option>
            <option value="Kisii">Kisii</option>
            <option value="Nakuru">Nakuru</option>
            <option value="kericho">Kericho</option>
          </select>
        </div>
      </div>
      <div id="app"></div>
    </div>
  );
};

export default EditLocation;
