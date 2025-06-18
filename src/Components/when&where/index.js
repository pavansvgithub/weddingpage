import "./index.css";
import image1 from "../../images/story-six-1.png";
import image2 from "../../images/story-six-3.png";
import image3 from "../../images/story-six-2.png";
import mapImage from "../../images/map-image.png";

const Whenandwhere = () => {
  return (
    <div className="mt-5 schedule-div  pt-5">
      <h1 className="mt-5 sail-font schedule-h1 mb-5">When & Where</h1>
      <div className="schedule-items-div center d-flex flex-row justify-content-center">
        <div d-flex flex-column justify-content-center>
          <div className="schedule-item text-center mx-auto">
            <img alt="" className="w-75" src={image1} />
          </div>
          <div>
            <h2 className="sail-font">The Reception</h2>
            <p className="jost-font ww-p1">
              Monday, 12 Apr. 2024 1:00 PM – 2:30 PM
            </p>
            <p className="jost-font ww-p2">
              Blue Ginger Lawn Taj West End25,Race Course Road, Bengaluru,
              560001
            </p>
          </div>
        </div>
        <div>
          <div className="schedule-item  mx-auto">
            <img alt="" className="w-75" src={image2} />
          </div>
          <div>
            <h2 className="sail-font">The Ceremony</h2>
            <p className="jost-font ww-p1">
              Monday, 15 Apr. 2024 1:00 PM – 2:30 PM
            </p>
            <p className="jost-font ww-p2">
              Blue Ginger Lawn Taj West End25,Race Course Road, Bengaluru,
              560001
            </p>
          </div>
        </div>
        <div>
          <div className="schedule-item mx-auto">
            <img alt="" className="w-75" src={image3} />
          </div>
          <div>
            <h2 className="sail-font">The Party</h2>
            <p className="jost-font ww-p1">
              Monday, 25 Apr. 2025 1:00 PM – 2:30 PM
            </p>
            <p className="jost-font ww-p2">
              Blue Ginger Lawn Taj West End25,Race Course Road, Bengaluru,
              560001
            </p>
          </div>
        </div>
      </div>
      <img alt="" className="map-img" src={mapImage} />
    </div>
  );
};

export default Whenandwhere;
