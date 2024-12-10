import { TbBrandAmazon } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div class='head'>
            <h1 class='title'>praison<small>.in</small></h1>
            <TbBrandAmazon style={{color:'orange', marginRight:'81%',marginTop:'-4%',}} size={70}/>
            <div className="search">
                <input type='text' className='type' placeholder="Search for products,Brands" /><div className="type2"><IoSearchSharp className="type1" size={30}/></div>

            </div>
            <div className="signin">
                <Link to="signin"><button>Signin</button></Link>
            </div>
            <div className="signin" id="up">
                <Link to="signup"><button>Signup</button></Link>
            </div>
            <div className="cart">
            <BsCart3 size={26}/>
            <p className="c">Cart</p>


            </div>
            
        </div>
    )
}
export default Header;