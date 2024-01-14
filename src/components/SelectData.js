import MultiBoxContainer from "./MultiBoxContainer";

const SelectDate = ({
  handleTimeSlots,
  formatDateToCustomFormat,
  timeSlot,
  uniqueDates,
}) => {
  return (
    <>
      <h1 className="title-font">Select Date</h1>
      <div className="box-container">
        {[...uniqueDates].map((uniqueDate, index) => (
          <MultiBoxContainer
            handleTimeSlots={handleTimeSlots}
            formatDateToCustomFormat={formatDateToCustomFormat}
            key={index}
            date={uniqueDate}
            isSelected={timeSlot === uniqueDate?.props?.children}
          />
        ))}
        <div className="add-box">...</div>
      </div>
    </>
  );
};
export default SelectDate;
