import "./MealItem.css"
import React, { useContext, useState, useRef, useEffect, useReducer } from "react"
import MyContext from "../Data/Context"




const MealItem = (props) => {
    const orderReducer = (state, action) => {
        if (action.type == "REQUEST_INPUT") {
            return {...state, specialRequest: action.request}
        }
        if (action.type == "AMOUNT_INPUT") {
            return {...state, amount: action.amount}
        }
        if (action.type == "ORDER_ADD") {
            return {...state, specialRequest: action.request, amount: action.amount}
        }
        if (action.type == "ERR_HANDLER") {
            return {...state, err: action.errStatus}
        }
        return { specialRequest: "test", amount: 1}
    }


    const ctx = useContext(MyContext)
    // Reducers
    const [orderState, orderDispatch] = useReducer(orderReducer, { specialRequest: "", amount: 0, err: false})

    // States
    // const [err, setErr] = useState(false)
    // const [specialRequest, setSpecialRequest] = useState("")
    // const [amount, setAmount] = useState(0)


    const reset = () => {
        orderDispatch({type: "ERR_HANDLER", errStatus: false})
        // setErr(false)
    }


    const specialRequestHandler = (e) => {
        orderDispatch({type: 'REQUEST_INPUT', request: e.target.value})
        // setSpecialRequest(e.target.value)
    }


    const amountHandler = (e) => {
        orderDispatch({type: 'AMOUNT_INPUT', amount: e.target.value})
        // setAmount(e.target.value)
    }


    useEffect(() => {
        if (orderState.amount > 0) orderDispatch({type: "ERR_HANDLER", errStatus: false})
    }, [orderState.amount])


    // Refs
    const inputRef = useRef()


    return (
        <div className="meal-item">
            <div className="meal-info-container">
                <div className="meal-title">{props.title}</div>
                <div className="meal-description">{props.description}</div>
                <div className="meal-price">{props.price}$</div>
            </div>
            <form className="meal-custom-order-container">
                <label htmlFor="meal-costum-order">special requests:</label>
                <input
                    type={"text"}
                    id={"meal-costum-order"}
                    value={orderState.specialRequest}
                    onChange={specialRequestHandler}
                />
            </form>
            <form className={`meal-order-container`} >
                {orderState.err == true && orderState.amount == 0 ? <div className="amount-err">please set an amount!</div> : ""}

                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type={"number"}
                        id={props.title}
                        className={`amount ${"bubble"}`}
                        value={orderState.amount}
                        onChange={amountHandler}
                        min={0}
                        max={100}
                        ref={inputRef}
                        onBlur={reset}
                    />
                </div>
                <button className="add" onClick={(e) => {
                    ctx.addOrderHandler(e, props.title, props.price,  
                        orderState, orderDispatch, inputRef)
                }
                }>+ Add</button>
            </form>
        </div>
    )
}

export default MealItem