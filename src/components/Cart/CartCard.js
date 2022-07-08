import React, { useContext } from "react"
import "./CartCard.css"
import OrderedItem from "../OrderedItem"
import MyContext from "../../Data/Context"
import Card from "../../UI/Card"



const CartCard = (props) => {
    const ctx = useContext(MyContext)


    return (
    <Card className="cart-card">
        <button className="close-cart"
            onClick={props.closeCard}>x</button>
            <div className="cart-items">
                {ctx.cartItems.length > 0 ?
                    ctx.cartItems.map(cartItem => (
                    <OrderedItem title={cartItem.title} 
                    price={cartItem.price}
                    amount={cartItem.amount} 
                    key={cartItem.id}
                    specialRequest={cartItem.specialRequest}
                    />
                )):
                <div className="cart-empty"> No imtes in your cart yet! </div>}
            </div>
            <div className="cart-total-container">
                <div >Total:</div>
                <div>{ctx.cartTotal.toFixed(2)}$</div>
            </div>
            <button className="confirm-order" onClick={ctx.confimrOrderHandler} style={ctx.cartItems.length > 0 ? {backgroundColor: "green", cursor: "pointer"}: {backgroundColor: "grey"}}>Confirm Order*</button>
            <div className="confirm-info">*console logs your order</div>
    </Card>
)}

export default CartCard