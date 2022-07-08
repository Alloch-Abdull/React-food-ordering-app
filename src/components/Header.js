import React, { useContext } from "react";
import "./Header.css"
import MyContext from "../Data/Context";
import CartModal from "./Cart/CartModal";

const Header = () => {
    const ctx = useContext(MyContext)


    return (
        <div className="header">
            <div className="logo">React food</div>
            <div className="header-btns">
                <button className="log-out-btn" onClick={() => { if(ctx.loggedIn) ctx.setLoggedIn(false) }}>Log out</button>
                <div className="cart-container" onClick={ctx.openCardHandler}>
                    <div className="cart-icon"></div>
                    <div className="view-cart">view cart </div>
                    <div className="total"> {ctx.cartTotal.toFixed(2)}$</div>
                </div>
            </div>
            {ctx.cartOpen == true ? <CartModal />: ''}
        </div>
    )
}

export default Header