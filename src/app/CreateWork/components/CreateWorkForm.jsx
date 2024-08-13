import { Textarea } from "keep-react";
import React, { useEffect, useState } from "react";
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
import { useAdminContext } from "../../../Context/AdminContext";

const CreateWorkForm = () => {
  const {
    writer,
    setWriter,
    writerName,
    setWriterName,
    setShowChooseWriterModal,
    setShowUploadFilesModal,
  } = useAdminContext();
  const [type, setType] = useState("");
  // words to submit
  const [words, setWords] = useState("500");
  const [comment, setComment] = useState("");
  // const [deadline, setDeadline] = useState("");

  const [showWordInput, setShowWordInput] = useState(false);
  const [status, setStatus] = useState("Not started");
  const [date, setDate] = useState(null);
  let [time, setTime] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  );
  const loading = false;

  const [selectedWordCount, setSelectedWordCount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWordCountChange = (event) => {
    setShowWordInput(false);
    setSelectedWordCount(event.target.id);
    setWords(event.target.id);
  };
  const handleWordStatusChange = (event) => {
    setStatus(event.target.id);
  };

  const handleOtherWords = () => {
    setShowWordInput(true);
  };

  return (
    <form className="pt-5 w-[58%] pb-14">
      <div className="mt-1 mb-5">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Type*
        </label>
        <input
          placeholder="Type"
          type="text"
          className="flex mt-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
           py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
            focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className="mb-5 ">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray ">
          Words*
        </label>

        <div className="mt-1 flex items-center gap-10 ">
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="words"
              id="500"
              className="cursor-pointer"
              onChange={handleWordCountChange}
              checked={words == "500"}
            />
            <label htmlFor="500">500</label>
          </div>
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="words"
              id="1000"
              className="cursor-pointer"
              onChange={handleWordCountChange}
            />
            <label htmlFor="1000">1000</label>
          </div>
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="words"
              id="1500"
              className="cursor-pointer"
              onChange={handleWordCountChange}
            />
            <label htmlFor="1500">1500</label>
          </div>
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="words"
              id="2000"
              className="cursor-pointer"
              onChange={handleWordCountChange}
            />
            <label htmlFor="2000">2000</label>
          </div>
          <div className="flex gap-2 text-neutral-500">
            <input
              type="radio"
              name="words"
              id="Other"
              className="cursor-pointer"
              onChange={handleOtherWords}
            />
            <label htmlFor="Other">Other</label>
          </div>
        </div>
        <div className={`${showWordInput ? "" : "hidden"} mt-1`}>
          <input
            placeholder="Words"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="words"
            value={words}
            onChange={(e) => setWords(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Comment
        </label>
        <div className="mt-1">
          <Textarea
            className="bg-transparent rounded-md border dark:bg-transparent border-gray-300 dark:border-gray-300 
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
             focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            id="comment"
            placeholder="Comment"
            rows={8}
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-8">
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
            {/* <TimeInput label="Event Time" defaultValue={new Time(11, 45)} /> */}
          </div>
          {/* <input
            placeholder="Deadline"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          /> */}
        </div>
      </div>
      <div className="mb-8">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Writer
        </label>
        <div className="mt-1">
          {/* the hidden input that will be submitted */}
          <input
            placeholder="Writer"
            type="text"
            className=" h-10 w-full rounded-md border border-gray-300 bg-transparent hidden
             px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
              focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            name="writer"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <div className="mt-1">
            <input
              placeholder="Writer"
              type="text"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent
            px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
            focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              name="writer_name"
              value={writerName}
              onChange={(e) => setWriterName(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              onClick={() => setShowChooseWriterModal(true)}
              className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-1
              text-white bg-blue-500 dark:bg-darkMode-cardButton
              hover:bg-darkMode-cardButtonHover hover:text-white
              px-4 transition-colors duration-300`}
            >
              Change
            </Button>
            <Button
              type="button"
              onClick={() => {
                setWriter(null);
                setWriterName("");
              }}
              className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-1
              bg-red-500 ext-white  hover:bg-red-600 text-white
              px-4 transition-colors duration-300`}
            >
              Remove
            </Button>
          </div>
        </div>
        <div className="mb-5 mt-5 ">
          <label className="text-base text-neutral-500 dark:text-darkMode-gray ">
            Status
          </label>

          <div className="mt-1 flex items-center gap-10 ">
            <div className="flex gap-2 text-neutral-500">
              <input
                type="radio"
                name="status"
                id="Not started"
                className="cursor-pointer"
                onChange={handleWordStatusChange}
                checked={status == "Not started"}
              />
              <label htmlFor="Not started">Not started</label>
            </div>
            <div className="flex gap-2 text-neutral-500">
              <input
                type="radio"
                name="status"
                id="In progress"
                className="cursor-pointer"
                onChange={handleWordStatusChange}
              />
              <label htmlFor="In progress">In progress</label>
            </div>
            <div className="flex gap-2 text-neutral-500">
              <input
                type="radio"
                name="status"
                id="Completed"
                className="cursor-pointer"
                onChange={handleWordStatusChange}
              />
              <label htmlFor="Completed">Completed</label>
            </div>
          </div>
        </div>
        <div className="mb-5 mt-5 flex items-center gap-5">
          <input
            type="checkbox"
            name="is_submitted"
            id="submitted"
            checked={isSubmitted}
            onChange={() => setIsSubmitted((current) => !current)}
          />
          <label
            htmlFor="submitted"
            className="text-base text-neutral-500 dark:text-darkMode-gray "
          >
            is submitted
          </label>
        </div>
      </div>

      <Button
        type="button"
        onClick={() => setShowUploadFilesModal(true)}
        className={`py-1
              text-neutral-600 border-neutral-600 bg-transparent hover:bg-neutral-200
              hover:border-neutral-600 hover:text-neutral-600 border-[1px]
              px-4 transition-colors duration-300`}
      >
        Upload files
      </Button>

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

export default CreateWorkForm;
