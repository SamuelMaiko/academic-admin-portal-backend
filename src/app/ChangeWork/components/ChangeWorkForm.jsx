import { Textarea } from "keep-react";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar } from "phosphor-react";
import { PencilLine } from "lucide-react";
import {
  Button,
  DatePicker,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "keep-react";
import { TimeInput } from "@nextui-org/react";
import { Time, parseAbsoluteToLocal } from "@internationalized/date";
import getWorkDetails from "../api/getWorkDetails";
import { useParams } from "react-router-dom";
import { parseISO } from "date-fns";
import formatToISO from "../../CreateWork/helpers/formatToISO";
import updateWork from "../api/updateWork";
import { createNewCookie } from "../../../Cookies/Cookie";
import WorkTypeCard from "../../CreateWork/components/WorkTypeCard";
import getWorkTypes from "../../CreateWork/api/getWorkTypes";
import { useAdminContext } from "../../../Context/AdminContext";

const ChangeWorkForm = ({ setLoading }) => {
  const {
    writer,
    setWriter,
    writerName,
    setWriterName,
    setShowChooseWriterModal,
    setShowChangeImagesModal,
    setShowChangeFilesModal,
    setWorkImages,
    setWorkFiles,
    setZipDetails,
    setWorkToUploadFiles,
    setShowDeleteWorkModal,
    setWorkToDelete,
  } = useAdminContext();
  const [workCode, setWorkCode] = useState("");
  const [workDetails, setWorkDetails] = useState({});

  const [type, setType] = useState("");
  const [workType, setWorkType] = useState("");
  // words to submit
  const [words, setWords] = useState("");
  const [deadlineFromAPI, setDeadlineFromAPI] = useState(
    "2025-03-13T20:00:00+03:00"
  );
  // const [deadline, setDeadline] = useState("");

  const [showWordInput, setShowWordInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const extractDate = (isoString) => {
    if (!isoString || typeof isoString !== "string") {
      console.error("Invalid date string:", isoString);
      return new Date(); // Default to today's date if invalid
    }
    return parseISO(isoString);
  };

  const extractTime = (isoString) => {
    if (!isoString || typeof isoString !== "string") {
      console.error("Invalid time string:", isoString);
      return;
    }

    // Parse the incoming ISO string into a Date object
    const parsedDate = parseISO(isoString);

    // Format it to UTC "2021-04-07T18:45:22Z"
    const utcString = format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");

    // Now pass this UTC string to parseAbsoluteToLocal
    return parseAbsoluteToLocal(utcString);
  };

  const [date, setDate] = useState(() => extractDate(deadlineFromAPI));
  const [time, setTime] = useState(new Time(11, 45));
  // for the save button
  const [isLoading, setIsLoading] = useState(false);

  const [selectedWordCount, setSelectedWordCount] = useState("");
  const [storedTypes, setStoredTypes] = useState([]);

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

  const { id } = useParams();

  useEffect(() => {
    // setDate(extractDate("2025-03-13T20:00:00+03:00"))
    // setTime(extractTime("2025-03-13T20:00:00+03:00"))
    getWorkDetails(id).then((data) => {
      setWorkDetails(data);
      // console.log(data.work_code)
      setWorkCode(data.work_code);
      setType(data.type);
      setWorkType(data.type.id);
      setWords(data.words);
      setComment(data.comment);
      if (data.writer != null) {
        setWriter(data.writer.id);
        setWriterName(`${data.writer.first_name} ${data.writer.last_name}`);
      } else {
        setWriter(null);
      }
      setStatus(data.status);
      setIsSubmitted(data.is_submitted);
      // setDeadlineFromAPI(data.deadline)
      setDate(extractDate(data.deadline));
      const deadlineDate = new Date(data.deadline);
      setTime(new Time(deadlineDate.getHours(), deadlineDate.getMinutes()));

      // storing the images in state
      setWorkImages(data.images);

      // storing the files in state
      setWorkFiles(data.files);

      if (data.words > 2000) {
        setShowWordInput(true);
      }
      // for the loader in the whole page
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      assigned_to: parseInt(writer, 10),
      type: parseInt(workType, 10),
      words,
      comment,
      deadline: formatToISO(date, time),
      status,
      is_submitted: isSubmitted,
    };
    updateWork(id, data).then((data) => {
      // console.log(data)
      setIsLoading(false);
    });
  };

  // getting the work types
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
          Work code
        </label>
        <input
          placeholder="Work code"
          type="text"
          className="flex mt-2 h-10 w-full rounded-md border border-gray-300 bg-transparent px-3
                py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1
                    focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          name="work code"
          value={workCode}
          onChange={(e) => setWorkCode(e.target.value)}
          disabled
        />
      </div>
      <div className="mt-1 mb-10">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Type*
        </label>
        <div className="mt-1 flex items-center gap-x-10 gap-y-3 flex-wrap">
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
              checked={words == "1000"}
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
              checked={words == "1500"}
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
              checked={words == "2000"}
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
              checked={words > 2000}
            />
            <label htmlFor="Other">Other {words > 2000 && `(${words})`}</label>
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
            <TimeInput
              defaultValue={new Time(11, 45)}
              value={time}
              onChange={setTime}
              label="Time"
            />
          </div>
        </div>
      </div>
      <div className="mb-10">
        <label className="text-base text-neutral-500 dark:text-darkMode-gray">
          Writer
        </label>
        <div className="mt-1">
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
                    bg-orange-500 ext-white  hover:bg-orange  -600 text-white
                    px-4 transition-colors duration-300`}
            >
              Remove
            </Button>
          </div>
        </div>
        <div className="mb-10 mt-10 ">
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
                id="In Progress"
                className="cursor-pointer"
                onChange={handleWordStatusChange}
                checked={status == "In Progress"}
              />
              <label htmlFor="In Progress">In progress</label>
            </div>
            <div className="flex gap-2 text-neutral-500">
              <input
                type="radio"
                name="status"
                id="Completed"
                className="cursor-pointer"
                onChange={handleWordStatusChange}
                checked={status == "Completed"}
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
        onClick={() => {
          setShowChangeImagesModal(true);
          // images zip details
          setZipDetails({
            zipName: workDetails && workDetails.work_code,
            zipDownloadLink: workDetails && workDetails.images_zip_url,
          });
          // storing work to upload files in global state
          setWorkToUploadFiles(id);
        }}
        className={`py-1
            text-neutral-600 bg-transparent bg-neutral-200 hover:bg-neutral-300
            hover:text-neutral-600 border-none
            px-4 transition-colors duration-300 flex items-center gap-3 `}
      >
        <PencilLine size={18} />
        <span>Edit images</span>
      </Button>
      <Button
        type="button"
        onClick={() => {
          setShowChangeFilesModal(true);
          // storing work to upload files in global state
          setWorkToUploadFiles(id);
        }}
        className={`py-1
            text-neutral-600 bg-transparent bg-neutral-200 hover:bg-neutral-300
            hover:text-neutral-600 border-none
            px-4 transition-colors duration-300 mt-5 flex items-center gap-3 `}
      >
        <PencilLine size={18} />
        <span>Edit files</span>
      </Button>
      <div className="flex items-center w-full justify-between mt-10">
        <input
          // onClick={() => {}}
          className="bg-green-700 hover:bg-green-800 rounded-lg text-white flex items-center 
              } p-[0.6rem] cursor-pointer transition-colors duration-300"
          type="submit"
          value={isLoading ? "Saving..." : "Save"}
          disabled={isLoading}
        />
        <Button
          type="button"
          onClick={() => {
            setShowDeleteWorkModal(true);
            setWorkToDelete(id);
          }}
          className={` dark:text-darkMode-cardText dark:hover:text-darkMode-cardTextHover py-[0.6rem]
                    bg-red-500 hover:bg-red-600 text-white h-full
                    px-4 transition-colors duration-300`}
        >
          Delete work
        </Button>
      </div>
    </form>
  );
};

export default ChangeWorkForm;
