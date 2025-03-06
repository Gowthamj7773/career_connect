import { Link } from "react-router-dom"
function Navbar (){
    return(
<div className="navbar">
            <div className="temp">
                <h3>CAREER CONNECT</h3>
                <div className="navMenu">
                    <Link to="/career_connect/">HOME</Link>
                    <Link to="/career_connect/OurStory">OUR STORY</Link>
                    <Link to="/career_connect/contactUs">CONTACT US</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar