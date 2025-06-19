import { NavLink } from "react-router-dom";
import "./index.css";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "SCHEDULES", path: "/schedule" },
  { label: "RSVP", path: "/rsvp" },
  { label: "GALLERY", path: "/gallery" },
  { label: "GIFT REGISTRY", path: "/gift-registry" },
];

const Footer = () => {
  return (
    <footer className="w-100 footer-div mt-5 pt-4">
      <p className="text-center footer-p1 jost-font">
        Let us come together in the spirit of love and joy, as we embark on this beautiful journey of togetherness. Your presence will add warmth and blessings to our union, making it a celebration to remember in our hearts and souls.
      </p>

      <div className="d-flex flex-wrap justify-content-center jost-font mt-3">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="footer-p2 mx-3 text-decoration-none"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
