import { useState, useEffect } from "react";
import "./index.css";

import heroImage from "../../images/hero-6 1.png";
import dateShapeImage from "../../images/date-shape 1.png";
import indianCouplesImage from "../../images/indain-couple (1) 1.png";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-11-15T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ d: days, h: hours, m: minutes, s: seconds });
    };

    updateCountdown(); // run immediately
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const { d, h, m, s } = timeLeft;

  return (
    <>
      {/* Hero Section */}
      <div className="home-bg w-100 d-flex flex-row flex-wrap">
        <div className="d-flex flex-column justify-content-center align-items-end text-center w-100 w-md-50">
          <div>
            <h1 className="sail-font home-h1 text-black">Ritesh & Joya</h1>
            <p className="jost-font home-p mt-4">
              Our Big Day is November 15, 2024
            </p>
            <img src={dateShapeImage} alt="Date Shape Decoration" />
            <div className="d-flex flex-row justify-content-center mt-4">
              <div className="m-3">
                <h1 className="sail-font home-h1 primary-color">{d}</h1>
                <p className="jost-font home-p primary-color">Days</p>
              </div>
              <div className="m-3">
                <h1 className="sail-font home-h1 primary-color">{h}</h1>
                <p className="jost-font home-p primary-color">Hours</p>
              </div>
              <div className="m-3">
                <h1 className="sail-font home-h1 primary-color">{m}</h1>
                <p className="jost-font home-p primary-color">Mins</p>
              </div>
              <div className="m-3">
                <h1 className="sail-font home-h1 primary-color">{s}</h1>
                <p className="jost-font home-p primary-color">Secs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center text-center w-100 w-md-50">
          <img className="home-img mr-5 mt-5" src={heroImage} alt="Wedding Couple Hero" />
        </div>
      </div>

      {/* Bride & Groom Section */}
      <div className="px-5 w-80 name-section align-items-center d-flex flex-row justify-content-center mt-5 pt-5 flex-wrap">
        <div className="w-100 w-md-25 text-md-end text-center mb-4">
          <h1 className="sail-font schedule-h1">Ritesh Debnath</h1>
          <p className="jost-font name-section-p">
            We look forward to building a life filled with love and countless memories. We are excited to share our joy.
          </p>
        </div>
        <div className="w-100 w-md-25 mx-4 h-100 d-flex flex-row justify-content-center align-items-center home-bg-2 mb-4">
          <img className="w-100" src={indianCouplesImage} alt="Indian Wedding Couple" />
        </div>
        <div className="w-100 w-md-25 text-md-start text-center mb-4">
          <h1 className="sail-font schedule-h1">Jaya Sharma</h1>
          <p className="jost-font name-section-p">
            We look forward to building a life filled with love and countless memories. We are excited to share our joy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

