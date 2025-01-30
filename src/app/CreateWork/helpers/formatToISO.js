const formatToISO = (date, time) => {
    // Extract year, month, day from the date object
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // JS months are 0-based
    const day = date.getDate();

    // Extract hour, minute from the time object
    const { hour, minute } = time;

    // Construct a new date string in ISO format
    const isoString = new Date(Date.UTC(year, month - 1, day, hour, minute, 0)).toISOString();

    // Replace 'Z' with the local timezone offset
    return isoString.replace("Z", getTimeZoneOffset(date));
};

const getTimeZoneOffset = (date) => {
    const offset = -date.getTimezoneOffset(); // Offset in minutes
    const sign = offset >= 0 ? "+" : "-";
    const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
    const minutes = String(Math.abs(offset) % 60).padStart(2, "0");
    return `${sign}${hours}:${minutes}`;
};

export default formatToISO;
