import './App.css';
import BookComponent from './Components/BookComponent';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import RSVP from './Components/RSVP';
import Schedules from './Components/Schedules';
import Whenandwhere from './Components/when&where';

const App=()=>{
  return(
    <div className="main-div p-5">
      <Header/>
      <Home/>
      <Schedules/>
      <RSVP/>
      <Whenandwhere/>
      <BookComponent/>
      <Footer/>
    </div>
  )
}

export default App;
