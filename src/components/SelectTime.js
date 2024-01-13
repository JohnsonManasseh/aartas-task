import MultiBoxContainer from "./MultiBoxContainer";

const SelectTime = ({
  filteredData,
  handleTimeClick,
  formatTimeTo12Hour,
  selectedTimeSlot,
}) => {
  return (
    <>
      <h1 className="title-font selectTime-margin">
        Select Time Slot{" "}
        <span className="available-slots">
          {filteredData?.length} slots available{" "}
        </span>
      </h1>
      <div className="box-container">
        {filteredData?.map((item) => (
          <MultiBoxContainer
            formatTimeTo12Hour={formatTimeTo12Hour}
            time={item}
            timeBox={true}
            key={item}
            handleTimeClick={handleTimeClick}
            isTimeSelected={selectedTimeSlot === item}
          />
        ))}
      </div>
    </>
  );
};

export default SelectTime;
