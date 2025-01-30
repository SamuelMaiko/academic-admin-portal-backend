import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "phosphor-react";
import {
  Button,
  DatePicker,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "keep-react";
import { TimeInput } from "@nextui-org/react";

const CreateRegCodeForm = () => {
  const [regCode, setRegCode] = useState("");
  const [isUsed, setIsUsed] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const loading = false;

  return (
    <form className="pt-5 w-[58%] pb-14">
      <div className="mt-1 mb-5">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Reg code*
        </label>
        <input
          placeholder="Registration code"
          type="text"
          className="flex mt-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
            py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
                focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          name="type"
          value={regCode}
          onChange={(e) => setRegCode(e.target.value)}
        />
      </div>
      <div className="mb-5 mt-5 flex items-center gap-5">
        <input
          type="checkbox"
          name="is_submitted"
          id="submitted"
          checked={isUsed}
          onChange={() => setIsUsed((current) => !current)}
        />
        <label
          htmlFor="submitted"
          className="text-base text-neutral-500 dark:text-darkMode-gray "
        >
          is used
        </label>
      </div>
      <Divider className="dark:hidden" color="primary" />
      <Divider className="hidden dark:block" color="secondary" />
      {/* date and time*/}
      <div className="mb-8 mt-4">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Time to expire
        </label>
        <div className="mt-1 flex gap-4">
          <div>
            <Popover showArrow={false} placement="bottom-start">
              <PopoverTrigger asChild>
                <Button
                  className="w-[11rem] py-4 justify-start gap-2 rounded-xl border border-metal-50 px-4
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
          <div className="flex w-[11rem]">
            <TimeInput value={time} onChange={setTime} label="Time" />
            {/* <TimeInput label="Event Time" defaultValue={new Time(11, 45)} /> */}
          </div>
        </div>
      </div>

      <input
        onClick={() => {}}
        className="bg-green-700 hover:bg-green-800 mt-3 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer transition-colors duration-300"
        type="submit"
        value={loading ? "Creating..." : "Create"}
        disabled={loading}
      />
    </form>
  );
};

export default CreateRegCodeForm;
