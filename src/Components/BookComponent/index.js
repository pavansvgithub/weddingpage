import { Component } from "react";
import "./index.css"
const images=[
    "https://s3-alpha-sig.figma.com/img/87ac/c48d/c0cf71402beab53e4776fe54490a4e57?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZBk2CZFpV~nv-rpS5ZcJf0prwtIeLcLW8oZPqXkxMDq-GsLnn3~XWKicsddL7rJFShd4-EgISjkXip4Fh1pEqE7jTjlXALghD-S6FZ9o3c1qb3pGxTHCKO7Tb0xmcg6aX9lqFJZS4x3ZHQXveo0Y8jNM4cBooksB~5Eg-o6lFmbMsP7~4VhH-uMHZ6pcg8h9sSOoldBqh3CXgRt4txO3lmJTTTFQ-oHcAnW9e6H9Ar1uJdN9aQSh72R1qCd1Z7E6-ReAw8nU~zXLrXE1ZqVUp51s072nhG3UybOqwrxWwZsII0C6-rPLfKZhgNPVajtj0bnfMz1r6mZVl77WZyU~fA__",
    "https://s3-alpha-sig.figma.com/img/ca66/6371/a549e904160de33b9807b419fc3644a2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cIvedQeSvXriJJJN93PM4KyU3bVq7YGUgd7rxHQSAhjlk1SH6GDUPJ9TnZxOu1k0cbHd7D5tVshMZ1z9oGdDZ~0qWQAyLUtinj9cWyH2vY8wR1qrKbF5QZPxwAzS8eMRBNX1d73yM44hoSLN6Mxm6wzkGoWbkHTKJCqpORcGhrnA8DrLUgqn7dWENh8P61wxT54yzXaMUyQ2UjXeMx6A32BgEiQZkht2tKzDWsr3zizLh5MaMlrEw1k5mC8zEnzMUCsFaKdsIZJr54t16f2TPUlpDR-hsndBC04KhiovXSgbToBYwNoZ8saSZe6f4L84uNAl0TS1isSfZrU2ynF~hQ__",
    "https://s3-alpha-sig.figma.com/img/a86d/9db6/4e5189a291f54be9ece2f5a2332cb6ab?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E-VLuJZBoYf8-XNQtXIyYajrNsSyD9dNQsJbwyo6TsWRsRzPITr1W6GrmOZ9Y9veeg14FoIkTSb7JbUPGOP~nBur~7LWnlNPtDKUatouasTwOQtPIyEAfpHAFtidrdKYF1NWOie8c2cSlQE4IOPar5V3h5zRfMauR~k2zL0xRG2JRbvw1qV9aBScKdeTUgD77jiwLi6bvdIMlEBKQkpwpgu04ifpz13Whsbk64UKezeI4jcuPlJT5Xs-KaGQPFCuksn3Q6H2kOlI6b7JQNI5BOicuufwvQvieI-VS0XXyBdlhPdaq-4Cz8kgZ4I9Yq5QtukUccFTwJ6bCjPFUhm5tA__",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0mSLgKRHL3etJ6I7X2RTuYwHl5bsBabLXA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKN4mrpHppuWloKYze8mDLt8MjYUcxoAKGng&usqp=CAU"

]
class BookComponent extends Component{
    state={ind:0}

    rightclick=()=>{
            this.setState((prevState) => ({ ind: prevState.ind + 2 }));
        
    }
    leftclick=()=>{
        const {ind}=this.state
        if(ind!==0){
            this.setState((prevState) => ({ ind: prevState.ind - 2 }));
        }
        
    }

    render(){
        const {ind}=this.state
        return(
            <div className="book-div">
                <div className="left-page-div"  onClick={this.leftclick}>
                    <img className="w-100 h-100 page-img" src={images[ind]} />
                </div>
                
                <div className="right-page-div" onClick={this.rightclick}>
                    <img className="w-100 h-100 page-img" src={images[ind+1]}/>
                </div>
            </div>
        )
    }
}

export default BookComponent