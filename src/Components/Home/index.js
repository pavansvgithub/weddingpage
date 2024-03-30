import {Component} from "react"
import "./index.css"

class Home extends Component{
    state={d:0,h:0,m:0,s:0}

    componentDidMount = () => {
        this.updateTimeUntilDate();
    };

    updateTimeUntilDate() {
        const calculateTimeDifference = () => {
            const now = new Date();
            const targetDate = new Date('2024-11-15T00:00:00');
            const difference = targetDate - now;
            return difference;
        };

        setInterval(() => {
            const difference = calculateTimeDifference();
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            this.setState({ d: days, h: hours, m: minutes, s: seconds });
        }, 1000);
    }

    render(){
        const {d,h,m,s}=this.state
        return(
            <>
            <div className="home-bg bg-war w-100 d-flex flex-row">
                <div className="d-flex flex-column justify-content-center bg-warnin align-items-end text-center w-50 z-0">
                    <div>
                        <h1 className="sail-font home-h1 text-black">Ritesh & Joya</h1>
                        <p className="jost-font home-p mt-4">Our Big Day is November 15,2024</p>
                        <img src="https://s3-alpha-sig.figma.com/img/0035/a24d/9f02bcff8fe3642e2e6d15ea0a552b9c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0RYDc4RF1SzWhQX-2jT8P-5E7cwEclbynTRHnchrVHgsHFMmqip1UZrsGgg44TpmOZIIldwqICsKYOw-e4jThfx96e588q9DE397ryisDerafxmRdFVn2C8G8QyYgW2BvQo~NnaxaCl5oVIgYifv6yklQeyHNHFd8Q2Swysi~2X6B4HNsl8nsbtqj6oCmdjjecU-xxbz3G7d2MlyzB7oWyUPDfE6K3EGhGCvmuz3DUaA65XPdJxu0P8LWFgyhDHzAxG7pbwFQxmTn-Fmta7nORO2TcxTIHrxVAS2~06uDDMdoSWlw0e9RIvIWoVpLSd1V0qmdXC8Dn8F0ET7kHCJg__"/>
                        <div className="d-flex flex-row justify-content-center mt-4">
                            <div className="m-3">
                                <h1 className="sail-font home-h1 primary-color">{d}</h1>
                                <p className="jost-font home-p primary-color">Days</p>
                            </div>
                            <div className="m-3">
                                <h1 className="sail-font home-h1 primary-color">{h}</h1>
                                <p className="jost-font home-p primary-color">Hours</p>
                            </div>
                            <div  className="m-3">
                                <h1 className="sail-font home-h1 primary-color">{m}</h1>
                                <p className="jost-font home-p primary-color">Mins</p>
                            </div>
                            <div  className="m-3">
                                <h1 className="sail-font home-h1 primary-color">{s}</h1>
                                <p className="jost-font home-p primary-color">Secs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column bg-succes justify-content-center align-items-center text-center w-50 z-n1">
                    <img className="home-img mr-5 mt-5" src="https://s3-alpha-sig.figma.com/img/a6af/cf80/d7bff40a45ffa1939b2c2c6518108031?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0j8LJ0GCCHbiSFjisO~rvae65N~B3f~iRNRMrf2jUSHFsreLNrcn3ES6F7V9OkklDOYwwZmKsSilujbv-wDdO1l2MXS5Vsq3J96pE5uYJVngRgecNkubWCduqw~NSFMcXdyZeQZ-n9bC4bkeYaLIjiW~UFyE3s8iU5SPuSd4coAWr~VFdYyzVbnd~7XNYMr0TApc1r8B3XZmL9soT13uw6o-9kDg8q~kBcn9XWbbYWYtsePIz2hDHmqY3iEjjoCnyfIgiF798yt0Mavq67uXOecB1~fsq4EhOuX-u4kmGdxOFiLbpuwCH4cmekepNpEra4ybOPBuz4emCYVLzHq~A__" />
                </div>
            </div>
            <div className="px-5 w-80 name-section align-items-center d-flex flex-row justify-content-center mt-5 pt-5">
                <div className="w-25 text-right">
                    <h1 className="sail-font schedule-h1">Ritesh Debtath</h1>
                    <p className="jost-font name-section-p">We look forward to building a life filled with love and countless memories. We are excited to share our joy.</p>
                </div>
                <div className="w-25 mx-4 h-100 d-flex flex-row justify-content-center align-items-center home-bg-2">
                    <img className="w-100" src="https://s3-alpha-sig.figma.com/img/ef0a/1c39/673cbf5e59a6f1c08380a38e793aa797?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPjMYHRXGKgdDN1KTJOpK1btjBbfS2fEenmvZq1pI~kw3S8~XU5Km2F2eRMOwf1iESOdh7ARnE6Ou3axQkZHUPdWw6dW3~~ySXlpF9mxpymt8-LKY6d9XaL~0uJXPnbQBTNitBQbjnNYji6C1DZa25KDBICgTIx9tvd6Ey9STQhTOfVjJij9C286IevY~XUKBtEAsPe1TRUtfSeOiya4XbWSTOJWJVDi1WA9VTzV8ND16tj9vlSZ4rJfylmb6u4E6zdDm1UXh0RSSUWh72~L8a8xDSm~B8LvX-zmPlvclKAxbPVzqfPWbspCIt0jV0EVmKwaZZycTe9H3uu9TfBy1g__"/>
                </div>
                <div className="w-25 text-left">
                    <h1 className="sail-font schedule-h1">Jaya Syarma</h1>
                    <p className="jost-font name-section-p">We look forward to building a life filled with love and countless memories. We are excited to share our joy.</p>
                </div>
            </div>
        </>
        )
    }
}

export default Home