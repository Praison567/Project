import { useEffect, useState } from "react";

function Jewelary(){

    const[data,setData]=useState(null)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(response=>response.json())
        .then(result=>setData(result))
        .catch((error)=>console.log('error is found:',error))

    },[])
    return(
        <div className="jewel1">
            {data ?(
                <div className="jewel2">
                    {data.map((item)=>(
                        <span className="jewel3">
                            <img src={item.image} className="e1"></img>
                            <h2 className="e4">{item.title}</h2>
                            <p>{item.description}</p>
                            <h3 className="e2">Price:${item.price}</h3>
                            <h4 className="e3">{item.rating.rate} Ratings</h4>
                            <button className="j1">Add to cart</button>

                        </span>
                    ))}

                </div>
            ):(
                <p>Loading data...</p>
            )}
            
        </div>
    )
}
export default Jewelary;