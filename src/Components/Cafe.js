import "./Cafe.css"
import React, {useState} from "react";


function Cafe()
{

    const[choco, setChoco] = useState(50);
    const[blue, setBlue] = useState(50);

    
    return (
        <div className="cafe">
            <h1>SALEM CAFE</h1>
                <div className="chocolate">
                    <label>
                        Item Name: Chocolate Chip Cookie
                        <br></br>
                    </label>
                    <label>
                        Available Quantity: {choco}
                    </label>
                    <br></br>
                    <button onClick={(e) => setChoco(choco - 1)}>Buy</button>
                </div>
                <div className="blueberry">
                <label>
                        Item Name: Blueberry Muffin
                        <br></br>
                    </label>
                    <label>
                        Available Quantity: {blue}
                    </label>
                    <br></br>
                    <button onClick={(e) => setBlue(blue - 1)}>Buy</button>
                </div>
                <br></br>
                <div className="total">
                    <p>Total No. of items sold so far: {(50 - choco) + (50 - blue)}</p>
                </div>
        </div>
    )
}

export default Cafe;