import { useEffect, useState } from "react";

function Electronics() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(response => response.json())
            .then(result => setData(result))
            .catch((error) => console.log('Error is found:', error))

    }, [])


    const handleBuynow = (itemtitle) => {
        alert(`Thank you for purchasing: ${itemtitle}`)
    }

    return (
        <div className="electrics1">
            {data ? (
                <div className="electrics2">
                    {data.map((item) => (
                        <span className="electrics3">
                            <img src={item.image} className="e1" alt=""></img>
                            <h2 className="e4">{item.title}</h2>
                            <p>{item.description}</p>
                            <h3 className="e2">Price:${item.price}</h3>
                            <h4 className="e3">{item.rating.rate} Ratings</h4>
                            <button className="e5" onClick={() => handleBuynow(item.title)}>Buy now</button>
                        </span>

                    ))}
                </div>
            ) : (
                <p>Loading data...</p>

            )}

        </div>
    )
}
export default Electronics;