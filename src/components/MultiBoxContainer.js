// dynamic boxes

const MultiBoxContainer = ({
  date,
  handleTimeSlots,
  isSelected,
  time,
  timeBox,
  isTimeSelected,
  handleTimeClick,
  formatTimeTo12Hour,
  formatDateToCustomFormat,
  id,
}) => {
  return (
    <>
      <div
        className={`${isSelected ? "colorBox" : "box"} ${
          isTimeSelected ? "colorTimeBox" : "box"
        } ${timeBox ? "time-box" : "box"}`}
        onClick={() => {
          if (handleTimeSlots) {
            handleTimeSlots(date);
          }

          if (handleTimeClick) {
            handleTimeClick(time, id);
          }
        }}
      >
        {formatDateToCustomFormat && (
          <p className="sub-text">
            {formatDateToCustomFormat(date?.props?.children)}
          </p>
        )}
        {formatTimeTo12Hour && (
          <p className="sub-text">{formatTimeTo12Hour(time)}</p>
        )}
      </div>
    </>
  );
};
export default MultiBoxContainer;
