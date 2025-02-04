import React, { useEffect, useState } from "react";
import { useAdminContext } from "../../../Context/AdminContext";
import { format } from "date-fns";
import { Calendar } from "phosphor-react";
import {
  Button,
  DatePicker,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "keep-react";
import { TimeInput } from "@nextui-org/react";
import { Time, parseAbsoluteToLocal } from "@internationalized/date";
import { useParams } from "react-router-dom";
import extractDate from "../../ChangeWork/helpers/extractDate";
import formatToISO from "../../CreateWork/helpers/formatToISO";
import updateRevision from "../api/updateRevision";
import getRevisionDetails from "../../RevisionsDetails/api/getRevisionDetails";

const ChangeRevisionForm = ({ setPageLoading }) => {
  const { work, setWork, workCode, setWorkCode, setShowChooseWorkModal } =
    useAdminContext();
  const [date, setDate] = useState(null);
  let [time, setTime] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  );
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setPageLoading(true);
    getRevisionDetails(id).then((data) => {
      setWorkCode(data.work.work_code);
      setWork(data.work.id);
      setDate(extractDate(data.submit_before));
      const deadlineDate = new Date(data.submit_before);
      setTime(new Time(deadlineDate.getHours(), deadlineDate.getMinutes()));
      setPageLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      submit_before: formatToISO(date, time),
    };
    updateRevision(id, data).then((data) => {
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-5 w-[58%] pb-14">
      <div>
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Work
        </label>
        <div className="mt-1">
          {/* the hidden input that will be submitted */}
          <input
            placeholder="Work"
            type="text"
            className=" h-10 w-full rounded-md border border-gray-300 bg-transparent hidden
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
            name="work"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <div className="mt-1">
            <input
              placeholder="Work code"
              type="text"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
            px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
            focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-80"
              name="work_code"
              value={workCode}
              onChange={(e) => setWorkCode(e.target.value)}
              disabled
            />
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              onClick={() => setShowChooseWorkModal(true)}
              className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-1 hidden
              text-white bg-blue-500 dark:bg-darkMode-cardButton
              hover:bg-darkMode-cardButtonHover hover:text-white
              px-4 transition-colors duration-300`}
            >
              Change
            </Button>
            <Button
              type="button"
              onClick={() => {
                setWork(null);
                setWorkCode("");
              }}
              className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-1 hidden
              bg-red-500 ext-white  hover:bg-red-600 text-white
              px-4 transition-colors duration-300`}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
      {/* the submit before time */}
      <div className="mb-8 mt-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Deadline
        </label>
        <div className="mt-1 flex flex-row gap-10">
          <div>
            <Popover showArrow={false} placement="bottom-start">
              <PopoverTrigger asChild>
                <Button
                  className="py-4 justify-start gap-2 rounded-xl border border-metal-50 px-4
                   text-left text-body-4 font-normal text-metal-600 hover:bg-white active:focus:scale-100
                    dark:border-metal-900 dark:bg-metal-900 dark:text-white dark:hover:bg-metal-800"
                  variant="outline"
                  color="secondary"
                  type="button"
                >
                  <Calendar
                    size={20}
                    className="text-metal-400 dark:text-white"
                  />
                  {date ? (
                    format(date ?? new Date(), "PPP")
                  ) : (
                    <span>Select Your Date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="z-50 max-w-min">
                <DatePicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  showOutsideDays={true}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-wrap gap-4">
            <TimeInput value={time} onChange={setTime} label="Time" />
          </div>
        </div>
      </div>
      <input
        className="bg-green-700 hover:bg-green-800 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer transition-colors duration-300"
        type="submit"
        value={loading ? "Saving..." : "Save"}
        disabled={loading}
      />
    </form>
  );
};

export default ChangeRevisionForm;
