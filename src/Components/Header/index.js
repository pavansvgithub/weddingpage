import "./index.css";

const Header = () => {
  return (
    <div className="header-div px-5 mx-5 d-flex flex-row justify-content-start align-items-center bg-warnig">
      <h1 className="sail-font primary-color header-h1">Wedding</h1>
      <div className="jost-font primary-color navitem-div">
        <a className="m-4 primary-color header-text" href="/">
          HOME
        </a>
        <a className="m-4 primary-color header-text" href="/">
          SCHEDULES
        </a>
        <a className="m-4 primary-color header-text" href="/">
          RSVP
        </a>
        <a className="m-4 primary-color header-text" href="/">
          GALLERY
        </a>
        <a className="m-4 primary-color header-text" href="/">
          GIFT REGISTRY
        </a>
      </div>
    </div>
  );
};

export default Header;
