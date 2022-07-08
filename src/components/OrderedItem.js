import React, {useContext} from "react";
import "./OrderedItem.css"


const OrderedItem = (props) => {

    return (
        <div className="ordered-item">
            <div className="ordered-details">
                <div className="ordered-title">{props.title}<span> x{props.amount}</span></div>
                <div className="ordered-special-requests">
                    <span className="special-requests-title">Special requests: </span>
                    {props.specialRequest.length ? 
                    ` ${props.specialRequest}` :
                    " none" }
                    </div>
            </div>
            <div className="ordered-amount">{props.price.toFixed(2)}$</div>
        </div>
    )
}

export default OrderedItem