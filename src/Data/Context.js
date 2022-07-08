import React, { useState, useEffect, createContext, useReducer } from 'react';

const MyContext = createContext({});


export const MyContextProvider = (props) => {
  const meals = [
    {
      title: "Sushi",
      description: "the freshest fish and veggies",
      price: 22.99,
      id: "1",
    },
    {
      title: "BBQ Burger",
      description: "American style burger!",
      price: 19.99,
      id: "2",
    },
    {
      title: "Schnitzel",
      description: "traditional German chicken!",
      price: 15.99,
      id: "3",
    }
  ]

  // States
  const [orderedItems, setOrderedItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)


  // Handlers
  const closeCardHandler = () => {
    setCartOpen(false)
}
  const openCardHandler = () => {
  setCartOpen(true)
}

const confimrOrderHandler = () => {
  if (cartItems.length == 0) return
  console.log(cartItems)
  setCartItems([])
  setCartTotal(0)
  setCartOpen(false)
}

  const addToCartHandler = () => {
    if (orderedItems.length == 0) return
    let n = 0
    orderedItems.map(orderedItem => (
      n = n + orderedItem.price))
    setCartTotal(prev => (prev + n))
    setCartItems(prev => [...prev, ...orderedItems])
    setOrderedItems([])
    setCartOpen(true)
  }

  const addOrderHandler = (e, orderedTitle, orderedPrice,  
     orderState, orderDispatch, inputRef) => {
    e.preventDefault()
    if (orderState.amount == 0) {
      orderDispatch({type: "ERR_HANDLER", errStatus: true})
      inputRef.current.focus()
      return
    }
    setOrderedItems(prev => {
      return [...prev, {
        title: orderedTitle,
        price: orderedPrice * orderState.amount,
        amount: orderState.amount,
        id: Math.random().toLocaleString(),
        specialRequest: orderState.specialRequest
      }]
    })

    orderDispatch({type: "ORDER_ADD", request: "", amount: 0})
  }

  // Login reducer

  const loginReducer = (state, action) => {
    if (action.type == "EMAIL_INPUT") {
      return {...state, emailInput: action.payload}
    }
    if (action.type == "PASS_INPUT") {
      return {...state, passInput: action.payload}
    }
    if ( action.type == "LOGIN") {
      return {...state, passInput: "", emailInput: ""}
    }
    if ( action.type == "PASS_ERR") {
      return {...state, passErr: true}
    }
    if (action.type == "PASS_CORRECT") {
      return {...state, passErr: false}
    }
    if (action.type == "EMAIL_ERR") {
      return {...state, emailErr: true}
    }
    if (action.type == "EMAIL_CORRECT") {
      return {...state, emailErr: false}
    }
    return {emailInput: "", passInput: "", loginIsValid: false, passErr: false, emailErr: false}
  }

  const [loginState, loginDispatch] = useReducer(loginReducer, {emailInput: "", passInput: "", loginIsValid: false, passErr: false, emailErr: false})

  const loginHandler = (e, emailRef, passRef) => {
    e.preventDefault()
    if (!emailRef.current.value.includes("@")) {
      loginDispatch({type: "EMAIL_ERR"})
    }

    if (passRef.current.value.length < 5) {
      loginDispatch({type: "PASS_ERR"})
      return
    } 

    if (passRef.current.value.length > 5 && emailRef.current.value.includes("@")){
    loginDispatch({type: "LOGIN"})
    setLoggedIn(true)
  }}

  const loginEmailHandler = (e) => {
    loginDispatch({type: "EMAIL_INPUT", payload: e.target.value})
  }

  const loginPassHandler = (e) => {
    loginDispatch({type: "PASS_INPUT", payload: e.target.value})
  }

  const passCorrectHandler = () => {
    loginDispatch({type: "PASS_CORRECT"})
  }

  const emailCorrectHandler = () => {
    loginDispatch({type: "EMAIL_CORRECT"})
  }


  return (
    <MyContext.Provider
      value={{
        meals: meals,
        addOrderHandler: addOrderHandler,
        orderedItems: orderedItems,
        addToCartHandler: addToCartHandler,
        cartTotal: cartTotal,
        cartOpen: cartOpen,
        setCartOpen: setCartOpen,
        closeCardHandler: closeCardHandler,
        openCardHandler: openCardHandler,
        cartItems: cartItems,
        confimrOrderHandler: confimrOrderHandler,
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn,
        loginHandler: loginHandler,
        loginEmailHandler: loginEmailHandler,
        loginPassHandler: loginPassHandler,
        loginState: loginState,
        passCorrectHandler: passCorrectHandler,
        emailCorrectHandler: emailCorrectHandler
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;