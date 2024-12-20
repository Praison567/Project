import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate()

    const handleSignin=(e)=>{
        e.preventDefault()

        if (email.trim()!=='' && password.trim()!==''){
            navigate('/')
        }else{
            alert('please fill out all the fields')
        }
    }

    return (
        <div className="border">
            <h2 className="SignIn">Signin</h2>

            <form onSubmit={handleSignin}>
                <div>
                    <p className="email">Email</p>
                </div>
                <div>
                    <input className="emailid" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <p className="pass">Password</p>

                </div>
                <div>
                    <input className="emailid" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button className="si">Signin</button>
                </div>
            </form>

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
