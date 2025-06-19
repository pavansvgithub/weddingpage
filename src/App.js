import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Schedules from './Components/Schedules';
import RSVP from './Components/RSVP';
import Whenandwhere from './Components/when&where';
import BookComponent from './Components/BookComponent';

const App = () => {
  return (
    <Router>
      <div className="main-div p-5">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedules />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/whenandwhere" element={<Whenandwhere />} />
          <Route path="/book" element={<BookComponent />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
