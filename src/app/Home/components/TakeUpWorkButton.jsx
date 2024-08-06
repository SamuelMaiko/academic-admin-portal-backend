import { Button } from "keep-react";
import { GraduationCap } from "phosphor-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import instance from "../../../axios/instance";
import { useProgressBarContext } from "../../../Context/ProgressBarContext";
import { useNotificationContext } from "../../../Context/NotificationContext";

const TakeUpWorkButton = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const { work, setWork } = useProgressBarContext();
  const { setNotificationsCount } = useNotificationContext();

  const handleTakeUpWork = async (e) => {
    e.stopPropagation();
    setLoading(true);
    try {
      const response = await instance.post(`/work/${id}/uptake/`);
      //   removing the work from the list
      const updatedWork = work.filter((item) => item.id !== id);
      setWork(updatedWork);

      // updating notifications count
      setNotificationsCount((current) => ({
        ...current,
        uptaken_work: current.uptaken_work + 1,
      }));
      //   toast
      toast.success(
        <p className="relative pr-2">
          Work added to your uptaken tasks.{" "}
          <button
            onClick={() => {}}
            className="absolute hidden right-0 top-1/2 -translate-y-1/2 text-sm p-[1px] px-[3px] bg-white rounded-xl
                     text-metal-800"
          >
            undo
          </button>
        </p>
      );
    } catch (error) {
      if (error.response && error.response.status) {
        const status = error.response.status;
        const message = error.response.data.error;

        switch (status) {
          case 400: {
            //   removing the work from the list
            const updatedWork = work.filter((item) => item.id !== id);
            setWork(updatedWork);
            toast.error(message);
            break;
          }
          case 500:
            toast.error(`Internal server error`);
            break;
          default:
            console.log(`Error: ${message}`);
            break;
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      onClick={handleTakeUpWork}
      className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 dark:bg-darkMode-cardButton
           dark:hover:bg-darkMode-cardButtonHover dark:text-darkMode-cardButtonT
            dark:hover:text-darkMode-cardButtonTHov mt-4 "
      disabled={loading}
    >
      <GraduationCap size={20} className="mr-1.5" />

      {loading ? "Processing..." : "Take up work"}
    </Button>
  );
};

export default TakeUpWorkButton;

//   const [loadingUndo, setLoadingUndo] = useState(false);
//   undoing uptaking work action
//   const handleUndoUptaken = async (e) => {
//     e.stopPropagation();
//     setLoadingUndo(true);
//     try {
//       const response = await instance.post(`/work/${id}/revoke/?type=undo`);
//       //   fetch work again
//       const response2 = await instance.get("/work/");
//       setWork(response.data);
//       //   setWork(updatedWork);
//     } catch (error) {
//       if (error.response && error.response.status) {
//         const status = error.response.status;
//         const message = error.response.data.error;

//         switch (status) {
//           case 400: {
//             toast.error(message);
//             break;
//           }
//           case 500:
//             toast.error(`Internal server error`);
//             break;
//           default:
//             console.log(`Error: ${message}`);
//             break;
//         }
//       } else {
//         toast.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setLoadingUndo(false);
//     }
//   };

//uptaking work
