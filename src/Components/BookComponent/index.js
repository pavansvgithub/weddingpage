import { Component } from "react";
import "./index.css";
import book1Image from "../../images/book-1.jpg";
import book2Image from "../../images/book-2.jpg";

class BookComponent extends Component {
  state = { ind: 0 };

  rightclick = () => {
    this.setState((prevState) => ({ ind: prevState.ind + 2 }));
  };
  leftclick = () => {
    const { ind } = this.state;
    if (ind !== 0) {
      this.setState((prevState) => ({ ind: prevState.ind - 2 }));
    }
  };

  render() {
    const { ind } = this.state;
    return (
      <div className="book-div">
        <div className="left-page-div" onClick={this.leftclick}>
          <img className="w-100 h-100 page-img" src={book1Image} alt="" />
        </div>

        <div className="right-page-div" onClick={this.rightclick}>
          <img className="w-100 h-100 page-img" src={book2Image} alt="" />
        </div>
      </div>
    );
  }
}

export default BookComponent;
