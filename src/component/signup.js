import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="border2">
            <h2 className="SignUp">Signup</h2>
            <form>
                <div>
                    <label className="name">Name</label><br></br>
                    <input className="emailid" type="text" required placeholder="Name"></input>
                </div>
                <div className="mob">
                    <label className="mobile">Mobile number</label><br></br>
                    <input className="emailid" type="number" required placeholder="Mobile number"></input>
                </div>
                <div className="mob">
                    <label className="email">Email</label><br></br>
                    <input className="emailid" type="email" required placeholder="Email"></input>
                </div>
                <div className="mob">
                    <label className="pass">Password</label><br></br>
                    <input className="emailid" type="password" required placeholder="At least 6 characters"></input>
                </div>
                <div>
                    <Link to="/signin"><button className="si">Sign up</button></Link>
                </div>


            </form>

            <p>By signing up you agree to our <Link>Terms of Service</Link></p>
            <p className="policy">and <Link>Privacy Policy</Link></p>
            <p className="already">Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
    )
}
export default Signup;