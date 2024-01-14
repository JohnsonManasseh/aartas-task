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
          {filteredData.length} slots available{" "}
        </span>
      </h1>
      <div className="box-container">
        {filteredData?.map((item) => (
          <MultiBoxContainer
            formatTimeTo12Hour={formatTimeTo12Hour}
            time={item.time_from}
            timeBox={true}
            key={item.id}
            id={item.id}
            handleTimeClick={handleTimeClick}
            isTimeSelected={selectedTimeSlot === item.time_from}
          />
        ))}
      </div>
    </>
  );
};

export default SelectTime;
