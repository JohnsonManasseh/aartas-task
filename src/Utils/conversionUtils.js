// Callback function to format a time string into a 12-hour format
export const formatTimeTo12Hour = (timeString) => {
  const time = new Date(`2000-01-01T${timeString}`);
  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
// Callback function to format a date string into a custom format
export const formatDateToCustomFormat = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  }

  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};
