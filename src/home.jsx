import { Link } from "react-router-dom"
import Navbar from "./navbar"
function Home()
{
    
return(<>
    <div className="container">
        <Navbar/>
        <div className="home">
            <div className="homeWords"> 
                <h1>Expand your connections</h1>
                <h1>excel your career</h1>
                <center>
                <Link to="/career_connect/login"><button>Get started</button></Link>
                </center>
            </div>
        </div>
    </div>
    <div className="homeDown" style={{textAlign:"center"}}>
    <p style={{color:"white",fontFamily:"sans-serif",display:"inline"}}>Connect with us</p>
    <img src="/career_connect/instagram.png"/>
    <img src="/career_connect/facebook.png"/>
    <img src="/career_connect/linkedin.png"/>
    </div>
    </>
)
}

export default Home