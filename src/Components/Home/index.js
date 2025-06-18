import { Component } from "react";
import "./index.css";
import heroImage from "../../images/hero-6 1.png";
import dateShapeImage from "../../images/date-shape 1.png";
import indianCouplesImage from "../../images/indain-couple (1) 1.png";

class Home extends Component {
  state = { d: 0, h: 0, m: 0, s: 0 };

  componentDidMount = () => {
    this.updateTimeUntilDate();
  };

  updateTimeUntilDate() {
    const calculateTimeDifference = () => {
      const now = new Date();
      const targetDate = new Date("2024-11-15T00:00:00");
      const difference = targetDate - now;
      return difference;
    };

    setInterval(() => {
      const difference = calculateTimeDifference();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      this.setState({ d: days, h: hours, m: minutes, s: seconds });
    }, 1000);
  }

  render() {
    const { d, h, m, s } = this.state;
    return (
      <>
        <div className="home-bg bg-war w-100 d-flex flex-row">
          <div className="d-flex flex-column justify-content-center bg-warnin align-items-end text-center w-50 z-0">
            <div>
              <h1 className="sail-font home-h1 text-black">Ritesh & Joya</h1>
              <p className="jost-font home-p mt-4">
                Our Big Day is November 15,2024
              </p>
              <img src={dateShapeImage} alt="" />
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
          <div className="d-flex flex-column bg-succes justify-content-center align-items-center text-center w-50 z-n1">
            <img className="home-img mr-5 mt-5" src={heroImage} alt="" />
          </div>
        </div>
        <div className="px-5 w-80 name-section align-items-center d-flex flex-row justify-content-center mt-5 pt-5">
          <div className="w-25 text-right">
            <h1 className="sail-font schedule-h1">Ritesh Debtath</h1>
            <p className="jost-font name-section-p">
              We look forward to building a life filled with love and countless
              memories. We are excited to share our joy.
            </p>
          </div>
          <div className="w-25 mx-4 h-100 d-flex flex-row justify-content-center align-items-center home-bg-2">
            <img className="w-100" src={indianCouplesImage} alt="" />
          </div>
          <div className="w-25 text-left">
            <h1 className="sail-font schedule-h1">Jaya Syarma</h1>
            <p className="jost-font name-section-p">
              We look forward to building a life filled with love and countless
              memories. We are excited to share our joy.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
