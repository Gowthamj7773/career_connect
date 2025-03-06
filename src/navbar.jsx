import { Link } from "react-router-dom"
function Navbar (){
    return(
<div className="navbar">
            <div className="temp">
                <h3>CAREER CONNECT</h3>
                <div className="navMenu">
                    <Link to="/">HOME</Link>
                    <Link to="/OurStory">OUR STORY</Link>
                    <Link to="/contactUs">CONTACT US</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar