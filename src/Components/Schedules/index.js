import "./index.css"

const Schedules=()=>{
    return(
        <div className="mt-5 schedule-div pt-5">
            <h1 className="mt-5 sail-font schedule-h1 mb-5">Schedules</h1>
            <div className="schedule-items-div d-flex flex-row justify-content-center">
                <div className="schedule-item">
                    <h1 className="schedule-item-h1 sail-font">Mehndi Ceremony</h1>
                    <p className="schedule-item-p1 jost-font">March 25, 2024</p>
                    <p className="schedule-item-p1 mt-1 jost-font">4:00 PM - 7:00 PM</p>
                </div>
                <div className="schedule-item">
                    <h1 className="schedule-item-h1 sail-font">Sangeet Night</h1>
                    <p className="schedule-item-p1 jost-font">March 26, 2024</p>
                    <p className="schedule-item-p1 mt-1 jost-font">7:00 PM - 11:00 PM</p>
                </div>
                <div className="schedule-item">
                    <h1 className="schedule-item-h1 sail-font">Haldi Ceremony</h1>
                    <p className="schedule-item-p1 jost-font">March 27, 2024</p>
                    <p className="schedule-item-p1 mt-1 jost-font">10:00 PM - 1:00 PM</p>
                </div>
            </div>
            <div className="schedule-items-div d-flex flex-row justify-content-center">
                <div className="schedule-item">
                    <h1 className="schedule-item-h1 sail-font">Pithi Ceremony</h1>
                    <p className="schedule-item-p1 jost-font">March 28, 2024</p>
                    <p className="schedule-item-p1 mt-1 jost-font">11:00 PM - 2:00 PM</p>
                </div>
                <div className="schedule-item">
                    <h1 className="schedule-item-h1 sail-font">Tilak Ceremony</h1>
                    <p className="schedule-item-p1 jost-font">March 29, 2024</p>
                    <p className="schedule-item-p1 mt-1 jost-font">12:00 PM - 3:00 PM</p>
                </div>
                <div className="schedule-item">
                    <h1 className="schedule-item-h1 sail-font">Bachelor Party</h1>
                    <p className="schedule-item-p1 jost-font">March 27, 2024</p>
                    <p className="schedule-item-p1 mt-1 jost-font">8:00 PM - 1:00 PM</p>
                </div>
            </div>
        </div>
    )
}

export default Schedules