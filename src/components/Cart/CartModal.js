import React, {useContext} from "react";
import  ReactDOM  from "react-dom";
import "./CartModal.css"
import MyContext from "../../Data/Context";
import CartCard from "./CartCard";



const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.closeCard} />
}


const CartModal = () => {

    const ctx = useContext(MyContext)

    
    return <>
    {ReactDOM.createPortal(<Backdrop closeCard={ctx.closeCardHandler}/>, document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<CartCard closeCard={ctx.closeCardHandler} cartItems={ctx.cartItems}/>, document.getElementById("overlay-root"))}
    </>
}

export default CartModal