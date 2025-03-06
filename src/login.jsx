import Navbar from "./navbar"
function Login()
{
    return(<>
        <Navbar/>
    <div className="loginBg">
        <div className="loginBox">
            <div className="loginLeft">  
                <p>Email</p>
                <input/>
                <p>Password</p>
                <input type="password"/>  
                <p>Confirm Password</p>
                <input type="password"/>
                <br/>
                <button>Sign in</button>          
            </div>
            <div className="loginRight">
            </div>
        </div>
    </div>
    </>
    )
}

export default Login