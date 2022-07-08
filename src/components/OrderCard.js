import React, { useContext } from "react";
import "./OrderCard.css"
import MyContext from "../Data/Context";
import OrderedItem from "./OrderedItem";
import Card from "../UI/Card";

const OrderCard = () => {
    const ctx = useContext(MyContext)
    return (
        <Card className="order-card">
            <div className="order-card-title">Order review:</div>

            {ctx.orderedItems.length > 0 ?

                ctx.orderedItems.map(orderedItem => (
                    <OrderedItem title={orderedItem.title} 
                    price={orderedItem.price}
                    amount={orderedItem.amount} 
                    key={orderedItem.id}
                    specialRequest={orderedItem.specialRequest}
                    />
                )) :
                <div> Add items to review your order! </div>}
            <button 
            className="add-to-cart" 
            style={ctx.orderedItems.length > 0 ? {backgroundColor: "green", cursor: "pointer"}: {backgroundColor: "grey"}}
            onClick={ctx.addToCartHandler}>
            Add to cart</button>
        </Card>
    )
}

export default OrderCard