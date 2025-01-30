import React, { useState } from "react";
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

const ImportantDates = ({
  lastLoginDate,
  setLastLoginDate,
  lastLoginTime,
  setLastLoginTime,
  dateJoinedDate,
  setDateJoinedDate,
  dateJoinedTime,
  setDateJoinedTime,
}) => {
  return (
    <>
      <h1 className="mt-8 bg-blue-500 text-white py-2 px-1 text-md">
        Important Dates
      </h1>
      <div className="mb-8 mt-4">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Last Login
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
                  {lastLoginDate ? (
                    format(lastLoginDate ?? new Date(), "PPP")
                  ) : (
                    <span>Select Your Date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="z-50 max-w-min">
                <DatePicker
                  mode="single"
                  selected={lastLoginDate}
                  onSelect={setLastLoginDate}
                  showOutsideDays={true}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-wrap gap-4">
            <TimeInput
              value={lastLoginTime}
              onChange={setLastLoginTime}
              label="Time"
            />
          </div>
        </div>
      </div>
      {/* Date joined ____________________ */}
      <div className="mb-8 mt-2">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Date joined
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
                  {dateJoinedDate ? (
                    format(dateJoinedDate ?? new Date(), "PPP")
                  ) : (
                    <span>Select Your Date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="z-50 max-w-min">
                <DatePicker
                  mode="single"
                  selected={dateJoinedDate}
                  onSelect={setDateJoinedDate}
                  showOutsideDays={true}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-wrap gap-4">
            <TimeInput
              value={dateJoinedTime}
              onChange={setDateJoinedTime}
              label="Time"
            />
            {/* <TimeInput label="Event Time" defaultValue={new Time(11, 45)} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantDates;
