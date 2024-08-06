import React from "react";
import PageHeader from "../../../SharedComponents/PageHeader";

const CreateWork = () => {
    const rad=React.useRef(null)
    const [currentSection, setCurrentSection] = React.useState("unassigned")

  return (
    <div className="w-full px-[2rem] pb-[2rem]">
      <PageHeader
        title={"Work creation"}
        subTitle={"Fill in the form to create new work."}
      />
      <form className="w-[60%] mt-4">
        <div className="mb-5">
          <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type
          </label>
          <input
            name="fullname"
            type="text"
            id="fullname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g John Doe"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Words
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phonenumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            File
          </label>
          <input
            type="text"
            id="phonenumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="07xxxxxxxx or 01xxxxxxxx"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phonenumber"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Deadline
          </label>
          <input
            type="text"
            id="phonenumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="07xxxxxxxx or 01xxxxxxxx"
            required
          />
        </div>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Personel
          </label>
        <div className="mb-5 flex gap-10">

            <div className="flex gap-2 items-center">

          <input
            type="radio"
            name="rad"
            onChange={()=>setCurrentSection("unassigned")}
            // ref={rad}
            checked={currentSection==="unassigned"}
            />
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-900 dark:text-white"
            >
            Unassigned
          </label>
            </div>
            <div className="flex gap-2 items-center">

          <input
            type="radio"
            name="rad"
            onChange={()=>setCurrentSection("assigned")}
            checked={currentSection==="assigned"}
            
            />
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-900 dark:text-white"
            >
            Assigned
          </label>
            </div>
        </div>
        <div className={`${currentSection==="assigned"?"":"hidden"} mb-5`}>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Assigned Writer
          </label>
          <input
            type="text"
            id="role"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Writer or Admin"
            required
          />
        </div>
        {/* <button onClick={()=> rad.current.checked=true}>Change</button> */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateWork;
