import "./index.css"

const RSVP=()=>{
    return(
        <div className="center">
            <div className="rsvp-div">
                <div className="rsvp-form">
                    <h1 className="sail-font text-center">Are You Attending ?</h1>
                    <input className="rsvp-inp jost-font" placeholder="Name" type="text"/>
                    <input className="rsvp-inp jost-font" placeholder="Email" type="text"/>
                    <div className="d-flex flex-row radio-div px-2 mt-3">
                        <div className="d-flex flex-row  align-center">
                            <input type="radio"/>
                            <p className="jost-font radio-text pt-3">Yes, I will be there</p>
                        </div>
                        <div className="d-flex flex-row align-center">
                            <input type="radio"/>
                            <p className="jost-font radio-text pt-3">Yes, I will be there</p>
                        </div>
                    </div>
                    <input className="rsvp-inp jost-font" placeholder="Number Of Guests" type="text"/>
                    <input className="rsvp-inp jost-font" placeholder="What Will You Be Attending" type="text"/>
                    <button className="rsvp-button">RSVP</button>
                </div>
            </div>
        </div>
        
    )
}

export default RSVP