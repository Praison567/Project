
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(){

    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const handleSignup=(e)=>{
        e.preventDefault()

        if (name.trim()!=='' && mobile.trim()!=='' && email.trim()!=='' && password.trim()!==''){
            navigate('/signin')
        }else{
            alert('please fill out all the fields')
        }

    }

    
    return(
        <div className="border2">
            <h2 className="SignUp">Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label className="name">Name</label><br></br>
                    <input className="emailid" type="text" required placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="mob">
                    <label className="mobile">Mobile number</label><br></br>
                    <input className="emailid" type="number" required placeholder="Mobile number" value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
                </div>
                <div className="mob">
                    <label className="email">Email</label><br></br>
                    <input className="emailid" type="email" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="mob">
                    <label className="pass">Password</label><br></br>
                    <input className="emailid" type="password" required placeholder="At least 6 characters" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button className="si">Sign up</button>
                </div>


            </form>

            <p>By signing up you agree to our <Link>Terms of Service</Link></p>
            <p className="policy">and <Link>Privacy Policy</Link></p>
            <p className="already">Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
    )
}
export default Signup;