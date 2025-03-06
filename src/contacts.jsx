import Navbar from "./navbar"

function ContactUs()
{
    return(
        <>
        <Navbar/>
        <div className="contactContainer">
            <div className="contactBox">
                <p>Name</p>
                <input/>
                <br />
                <p>Mobile No.</p>
                <input type="number" />
                <br />
                <p>Mail</p>
                <input/>
                <br />
                <p>Address</p>
                <input/>
                <center>
                <button>Submit</button>
                </center>
            </div>
        </div>
        </>
    )
}

export default ContactUs