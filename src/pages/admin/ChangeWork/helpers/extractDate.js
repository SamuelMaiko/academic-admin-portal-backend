import { parseISO } from "date-fns";
const extractDate = (isoString) => {
  if (!isoString || typeof isoString !== "string") {
    console.error("Invalid date string:", isoString);
    return new Date(); // Default to today's date if invalid
  }
  return parseISO(isoString);
};

export default extractDate;
