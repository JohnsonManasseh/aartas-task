import { useEffect, useState } from "react";

// custom hook for fetching clinic Data
const UseClinicData = () => {
  const [clinicData, setClinicData] = useState([]);
  const [timeSlot, setTimeSlot] = useState("");

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_CLINIC_DATA_API_URL_UAT;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ doctor_id: 2 }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setClinicData(data.data[0].timeslots.slice(0, 50));
        setTimeSlot(data?.data[0]?.timeslots[0]?.date);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return { clinicData, timeSlot, setTimeSlot };
};

export default UseClinicData;
