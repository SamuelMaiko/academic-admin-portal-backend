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
import formatToISO from "../helpers/formatToISO";
import createWork from "../api/createWork";
import uploadWorkFiles from "../api/uploadWorkFiles";
import getWorkTypes from "../api/getWorkTypes";
import { useNavigate } from "react-router-dom";
import uploadWorkImages from "../api/uploadWorkImages";
import WorkTypeCard from "./WorkTypeCard";

const CreateWorkForm = () => {
  const {
    writer,
    setWriter,
    writerName,
    setWriterName,
    setShowChooseWriterModal,
    setShowUploadFilesModal,
  } = useAdminContext();
  // words to submit
  const [words, setWords] = useState("500");
  const [comment, setComment] = useState("");
  // const [deadline, setDeadline] = useState("");

  const [showWordInput, setShowWordInput] = useState(false);
  const [status, setStatus] = useState("Not started");
  const [workType, setWorkType] = useState("1");
  const [date, setDate] = useState(() => new Date());
  const [time, setTime] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  );
  const loading = false;

  const [selectedWordCount, setSelectedWordCount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState(null);
  const [images, setImages] = useState(null);
  const [storedTypes, setStoredTypes] = useState([]);
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      assigned_to: parseInt(writer, 10),
      deadline: formatToISO(date, time),
      comment,
      words,
      type: parseInt(workType, 10),
    };

    createWork(data).then((data) => {
      // upload the files to the server
      uploadWorkFiles(data.id, files).then((data) => {
        // navigate(-1)
      });

      // upload the images to the server
      uploadWorkImages(data.id, images).then((data) => {
        navigate("/manage-work");
      });
    });

    // deleting the writer details in input
    setWriterName("");
    setWriter("");
  };

  // getting the stored types

  useEffect(() => {
    getWorkTypes().then((data) => {
      setStoredTypes(data);
      // console.log(data)
    });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="pt-5 w-[58%] pb-14">
      <div className="mt-1 mb-10">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Type*
        </label>
        <div className="mt-1 flex items-center gap-x-10 gap-y-3 flex-wrap ">
          {storedTypes &&
            storedTypes.map((type) => (
              <WorkTypeCard
                key={type.id}
                {...type}
                setWorkType={setWorkType}
                workType={workType}
              />
            ))}
        </div>
      </div>
      <div className="mb-10 ">
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
      <div className="mb-10">
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
      <div className="mb-10">
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
      <div className="mb-10">
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
              bg-orange-500 ext-white  hover:bg-orange-600 text-white
              px-4 transition-colors duration-300`}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 mt-2">
        <input
          id="upload_images_input"
          multiple
          accept="image/*"
          type="file"
          onChange={(e) => {
            setImages([...e.target.files]);
            e.target = "";
          }}
          className="hidden"
        />
        <Button
          type="button"
          onClick={() => {
            document.getElementById("upload_images_input").click();
          }}
          className={`py-1
            text-neutral-600 bg-transparent bg-neutral-200 hover:bg-neutral-300
            hover:text-neutral-600 border-none
            px-4 transition-colors duration-300 flex items-center gap-3`}
        >
          Upload images
        </Button>
        <p className="italic text-gray-500 font-normal text-sm ">
          {images?.length ?? 0} images uploaded
        </p>
      </div>

      <div className="flex items-center gap-5">
        <input
          id="upload_files_input"
          multiple
          type="file"
          onChange={(e) => {
            setFiles([...e.target.files]);
            e.target = "";
          }}
          className="hidden"
        />
        <Button
          type="button"
          onClick={() => {
            document.getElementById("upload_files_input").click();
          }}
          className={`py-1
            text-neutral-600 bg-transparent bg-neutral-200 hover:bg-neutral-300
            hover:text-neutral-600 border-none
            px-4 transition-colors duration-300 mt-5 flex items-center gap-3`}
        >
          Upload files
        </Button>
        <p className="italic text-gray-500 font-normal text-sm ">
          {files?.length ?? 0} files uploaded
        </p>
      </div>

      <input
        // onClick={() => {}}
        className="bg-green-700 hover:bg-green-800 mt-10 rounded-lg text-white flex items-center 
      } p-[0.6rem] cursor-pointer transition-colors duration-300"
        type="submit"
        value={loading ? "Creating..." : "Create"}
        disabled={loading}
      />
    </form>
  );
};

export default CreateWorkForm;
