import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="header-div px-5 mx-5 d-flex flex-row justify-content-start align-items-center bg-warning">
      <h1 className="sail-font primary-color header-h1">Wedding</h1>

      <div className="jost-font primary-color navitem-div">
        <NavLink
          className="m-4 primary-color header-text"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className="m-4 primary-color header-text"
          to="/schedule"
        >
          SCHEDULES
        </NavLink>
        <NavLink
          className="m-4 primary-color header-text"
          to="/rsvp"
        >
          RSVP
        </NavLink>
        <NavLink
          className="m-4 primary-color header-text"
          to="/gallery"
        >
          GALLERY
        </NavLink>
        <NavLink
          className="m-4 primary-color header-text"
          to="/gift-registry"
        >
          GIFT REGISTRY
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
