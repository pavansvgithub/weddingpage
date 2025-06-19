import { useState } from "react";
import "./index.css";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "",
    event: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.attending) newErrors.attending = "Select an option";
    if (!formData.guests.trim()) newErrors.guests = "Number of guests is required";
    if (!formData.event.trim()) newErrors.event = "Event name is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setErrors({});
      // Reset form if needed:
      // setFormData({ name: "", email: "", attending: "", guests: "", event: "" });
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="center">
      <form className="rsvp-div" onSubmit={handleSubmit}>
        <div className="rsvp-form">
          <h1 className="sail-font text-center">Are You Attending?</h1>

          <input
            className="rsvp-inp jost-font"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            className="rsvp-inp jost-font"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <div className="d-flex flex-column radio-div px-2 mt-3">
            <div className="d-flex flex-row align-items-center mb-2">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={formData.attending === "yes"}
                onChange={handleChange}
              />
              <p className="jost-font radio-text pt-3 ml-2">Yes, I will attend</p>
            </div>
            <div className="d-flex flex-row align-items-center">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={formData.attending === "no"}
                onChange={handleChange}
              />
              <p className="jost-font radio-text pt-3 ml-2">Sorry, I can't make it</p>
            </div>
            {errors.attending && <p className="error-text">{errors.attending}</p>}
          </div>

          <input
            className="rsvp-inp jost-font"
            placeholder="Number Of Guests"
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          />
          {errors.guests && <p className="error-text">{errors.guests}</p>}

          <input
            className="rsvp-inp jost-font"
            placeholder="What Will You Be Attending?"
            type="text"
            name="event"
            value={formData.event}
            onChange={handleChange}
          />
          {errors.event && <p className="error-text">{errors.event}</p>}

          <button className="rsvp-button" type="submit">
            RSVP
          </button>

          {submitted && <p className="success-text mt-3">Thank you for your response!</p>}
        </div>
      </form>
    </div>
  );
};

export default RSVP;
