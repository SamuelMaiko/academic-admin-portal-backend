import { Button, TableCell, TableRow } from "keep-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Minus } from "lucide-react";
import claimWork from "../api/claimWork";
import formatDate from "../../../../utils/formatDate";

const TableRowSubmissions = ({
  id,
  work,
  created_at,
  sender,
  is_claimed,
  claimed_by,
}) => {
  const [isClaimed, setIsClaimed] = useState(false);
  const [claimedBy, setClaimedBy] = useState("");
  const navigate = useNavigate();

  const handleClaim = (e) => {
    e.stopPropagation();
    if (!isClaimed) {
      claimWork(id).then((data) => {
        // console.log(data);
        setIsClaimed(true);
        const firstName = JSON.parse(localStorage.getItem("firstName"));
        const lastName = JSON.parse(localStorage.getItem("lastName"));
        setClaimedBy(firstName + " " + lastName);
      });
    }
  };

  useEffect(() => {
    setIsClaimed(is_claimed);
    setClaimedBy(`${claimed_by.first_name} ${claimed_by.last_name}`);
  }, []);

  return (
    <TableRow
      onClick={() => {
        navigate(`/submissions/${id}`);
      }}
      // bg-white dark:bg-darkMode-cardBg dark:text-white
      className={`
        ${
          !isClaimed
            ? "bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 hover:dark:bg-blue-800"
            : " "
        }
        cursor-pointer h-[4rem]`}
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                {/* <p className="-mb-0.5 text-body-4 font-medium text-metal-600 dark:text-sidebartext-hover"> */}
                <p className="-mb-0.5 text-[12px] lg:text-[15px] text-metal-600 dark:text-sidebartext-hover font-bold ">
                  {work.work_code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="whitespace-nowrap text-[12px] lg:text-[15px]">
        <p className="whitespace-nowrap lowercase">{formatDate(created_at)}</p>
      </TableCell>

      <TableCell>
        <p className="whitespace-nowrap text-[12px] lg:text-[15px]">
          {sender.first_name} {sender.last_name}
        </p>
      </TableCell>
      <TableCell className="text-[12px] lg:text-[15px] whitespace-nowrap">
        <p>
          {isClaimed ? claimedBy : <Minus className="ml-[30%]" size={18} />}
        </p>
      </TableCell>

      <TableCell>
        <div className="flex items-center gap-1">
          <Button
            onClick={handleClaim}
            className={` dark:text-darkMode-cardText
               dark:hover:text-darkMode-cardTextHover py-2 
                 text-white ${
                   !isClaimed
                     ? "bg-blue-500 dark:bg-darkMode-cardButton hover:bg-blue-400 px-7"
                     : "bg-gray-400 hover:bg-gray-400 text-white cursor-not-allowed px-4"
                 } transition-colors duration-300 text-[12px] lg:text-[15px]`}
            // disabled={isClaimed}
          >
            {isClaimed ? "Claimed" : "Claim"}
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowSubmissions;
