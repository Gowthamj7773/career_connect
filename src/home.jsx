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
                <button><Link to="/login">Get started</Link></button>
                </center>
            </div>
        </div>
    </div>
    <div className="homeDown" style={{textAlign:"center"}}>
    <p style={{color:"white",fontFamily:"sans-serif",display:"inline"}}>Connect with us</p>
    <img src="/instagram.png"/>
    <img src="/facebook.png"/>
    <img src="/linkedin.png"/>
    </div>
    </>
)
}

export default Home