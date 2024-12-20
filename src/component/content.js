import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { SiStylelint } from "react-icons/si";
import { GiStarShuriken } from "react-icons/gi";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { PiSealPercent } from "react-icons/pi";
import { MdOutlineCurrencyExchange } from "react-icons/md";
function Content() {

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [data, setData] = useState();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(json=>setData(json))
    },[])

    

    const shownavbar = () => {
        setIsNavbarVisible(true);
    };

    const closenavbar = () => {
        setIsNavbarVisible(false);
    };


    return (
        <div className="content">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-links">
                    <IoMenuSharp size={25} style={{ paddingTop: '15px', color: 'white' }} onClick={shownavbar} />
                    {data?.map((products)=>(
                        <>
                        <Link to={products} className="og"><div>{products}</div></Link>
                        </>
                    ))}
                
                </div>
            </nav>

            {/* Side Navbar */}
            <div className={`side-navbar ${isNavbarVisible ? "visible" : ""}`}
                style={{
                    position: "fixed",
                    top: 0,
                    left: isNavbarVisible ? "0" : "-300px",
                    width: "250px",
                    height: "100%",
                    backgroundColor: "rgb(9,9,65)",
                    color: "white",
                    padding: "20px",
                    transition: "left 0.5s ease-in-out",
                    zIndex: 1000,
                }}>
                <p><FaXmark size={22} style={{ paddingLeft: '230px' }} onClick={closenavbar} /></p>
                <div className="side-navbar-links">
                    <p className="side-navbar-link"><Link to="electronics">Electronics</Link></p>
                    <p className="side-navbar-link"><Link to="jewelery">Jewelary</Link></p>
                    <p className="side-navbar-link"><Link to="men's clothing">Mens Clothing</Link></p>
                    <p className="side-navbar-link"><Link to="women's clothing">Womens Clothing</Link></p>
                </div>
            </div>

            {/* Offers */}

            <h2 className="sale">Black Friday Sale is LIVE Now <SiStylelint size={30} /></h2>
            <div className="discounts">
                <div>
                    <h2>Up to 50% off</h2>
                    <p className="products">Air coolers, room heaters and more</p>
                    <p className="off"><GiStarShuriken /> TOP BRANDS  | <IoStorefrontSharp /> FROM STORES NEARBY</p>
                    <img src="/images/air coolers.jpg" alt="" className="aircooler" />



                </div>
                <div>
                    <h2>UNDER <FaRupeeSign size={20} />499</h2>
                    <h3 className="t-shirts">t-shirts & polos</h3>
                    <p className="offer">TOP BRANDS | LATEST TRENDS</p>
                    <img src="/images/t shirts.jpg" alt="" className="tshirts"/>
                </div>
                <div>
                    <h2 style={{ fontSize: '28px' }}>Smartphones</h2>
                    <h3 className="t-shirts">Starting <FaRupeeSign size={20} />6,499</h3>
                    <p className="offer"><PiSealPercent size={20} /> NO COST EMI | <MdOutlineCurrencyExchange /> EXCHANGE OFFER</p>
                    <img src="/images/mobiles.jpg" alt="" className="mobiles" />
                </div>
                

            </div>


            {/* Contents */}
            <div>
                <div className="electronics">
                    <h2 className="electric1">ELECTRONICS</h2>
                    <h2 className="electric2">Appliances for your</h2>
                    <h2 className="electric2">home | Up to 55% off</h2>
                    <img  src="/images/electronics 1.jpg" alt="" className="ac"/>
                    <p style={{paddingRight:'162px',marginTop:'2px'}}>Air conditioners</p>
                    <img src="/images/electronics 2.jpg" alt="" className="fridge"/>
                    <p style={{marginLeft:"114px"}} className="r">Refrigerators</p>
                    <img src="/images/electronics 3.jpg" alt="" className="oven"/>
                    <p className="m">Microwaves</p>
                    <img src="/images/electronics 4.jpg" alt="" className="washing"/>
                    <p className="w">Washing machines</p>
                    <div className="explore1">
                        <Link to="electronics" className="exploreone">Explore more</Link>
                    </div>
                    
                </div>

                <div className="jewelary">
                    <h2 className="electric1">JEWELARY</h2>
                    <h2 className="jewels">Wide Range of Necklace Set For Women</h2>
                    <img src="/images/jewelary3.jpg" alt="" className="jewelimg1"/>
                    <img src="/images/jewelary4.jpeg" alt="" className="jewelimg1" style={{marginTop:'10px'}}/>
                    <div className="explore3">
                        <Link to="jewelery" className="exploreone">Explore more</Link>
                    </div>


                </div>
                <div className="mens-clothing">
                    <h2 className="electric1">MENS CLOTHING</h2>
                    <h2 className="mens2">Up to 60% off | Styles for</h2>
                    <h2 className="mens2">mens</h2>
                    <img src="/images/mens3.webp" alt="" className="img1"/>
                    <img src="/images/mens4.webp" alt="" className="img2"/>
                    <img src="/images/mens2.webp" alt="" className="img3"/>
                    <img src="/images/mens1.webp" alt="" className="img4"/>
                    <div className="explore2">
                        <Link to="men's clothing" className="exploretwo">Explore more</Link>
                    </div>

                </div>
                <div className="womens-clothing">
                    <h2 className="electric1">WOMENS CLOTHING</h2>
                    <h2 className="mens2">Up to 50% off | Trending</h2>
                    <h2 className="mens2">fashion on women's clothing</h2>
                    <img src="/images/womens1.webp" alt="" className="womensimg1"/>
                    <img src="/images/womens3.webp" alt="" className="womensimg2"/>
                    <div className="explore4">
                        <Link to="women's clothing" className="exploreone">Explore more</Link>
                    </div>
                </div>
            </div>



        </div>





    )
}
export default Content;