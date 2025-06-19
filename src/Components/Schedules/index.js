import "./index.css";

const scheduleData = [
  {
    title: "Mehndi Ceremony",
    date: "March 25, 2024",
    time: "4:00 PM - 7:00 PM",
  },
  {
    title: "Sangeet Night",
    date: "March 26, 2024",
    time: "7:00 PM - 11:00 PM",
  },
  {
    title: "Haldi Ceremony",
    date: "March 27, 2024",
    time: "10:00 AM - 1:00 PM", // ✅ corrected PM to AM
  },
  {
    title: "Pithi Ceremony",
    date: "March 28, 2024",
    time: "11:00 AM - 2:00 PM", // ✅ corrected PM to AM
  },
  {
    title: "Tilak Ceremony",
    date: "March 29, 2024",
    time: "12:00 PM - 3:00 PM",
  },
  {
    title: "Bachelor Party",
    date: "March 30, 2024",
    time: "8:00 PM - 12:00 AM",
  },
];

const Schedules = () => {
  return (
    <section className="mt-5 schedule-div pt-5">
      <h1 className="mt-5 sail-font schedule-h1 mb-5 text-center">Schedules</h1>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {scheduleData.map((event, index) => (
          <div key={index} className="schedule-item text-center">
            <h2 className="schedule-item-h1 sail-font">{event.title}</h2>
            <p className="schedule-item-p1 jost-font">{event.date}</p>
            <p className="schedule-item-p1 mt-1 jost-font">{event.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedules;
