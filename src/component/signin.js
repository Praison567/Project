import { Link } from "react-router-dom";

function Signin() {
    return (
        <div className="border">
            <h2 className="SignIn">Signin</h2>
            <div>
                <p className="email">Email</p>
            </div>
            <div>
                <input className="emailid" type="email" />
            </div>
            <div>
                <p className="pass">Password</p>

            </div>
            <div>
                <input className="emailid" type="password" />
            </div>
            <div>
                <Link to="/"><button className="si">Signin</button></Link>
            </div>
            <div>
                <p style={{ marginTop: '35px' }}>Don't have an account?</p>
            </div>
            <div>
                <Link to="/signup"><button className="account">Sign up</button></Link>
            </div>
        </div>




    )
}
export default Signin;