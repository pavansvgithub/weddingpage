import "./index.css";

import image1 from "../../images/story-six-1.png";
import image2 from "../../images/story-six-3.png";
import image3 from "../../images/story-six-2.png";
import mapImage from "../../images/map-image.png";

const events = [
  {
    title: "The Reception",
    date: "Monday, 12 Apr. 2024",
    time: "1:00 PM – 2:30 PM",
    address: "Blue Ginger Lawn, Taj West End, 25 Race Course Road, Bengaluru, 560001",
    image: image1,
    alt: "Reception image"
  },
  {
    title: "The Ceremony",
    date: "Monday, 15 Apr. 2024",
    time: "1:00 PM – 2:30 PM",
    address: "Blue Ginger Lawn, Taj West End, 25 Race Course Road, Bengaluru, 560001",
    image: image2,
    alt: "Ceremony image"
  },
  {
    title: "The Party",
    date: "Monday, 25 Apr. 2025",
    time: "1:00 PM – 2:30 PM",
    address: "Blue Ginger Lawn, Taj West End, 25 Race Course Road, Bengaluru, 560001",
    image: image3,
    alt: "Party image"
  }
];

const Whenandwhere = () => {
  return (
    <section className="mt-5 schedule-div pt-5">
      <h1 className="mt-5 sail-font schedule-h1 mb-5 text-center">When & Where</h1>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {events.map((event, index) => (
          <div key={index} className="text-center schedule-item mx-3">
            <img className="w-75 mb-3" src={event.image} alt={event.alt} />
            <h2 className="sail-font">{event.title}</h2>
            <p className="jost-font ww-p1">{event.date} {event.time}</p>
            <p className="jost-font ww-p2">{event.address}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <img className="map-img w-75" src={mapImage} alt="Venue map location" />
      </div>
    </section>
  );
};

export default Whenandwhere;

