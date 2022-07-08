import React, { useContext, useRef } from "react";
import Card from "../../UI/Card";
import "./LoginCard.css"
import MyContext from "../../Data/Context";


const LoginCard = () => {
    const ctx = useContext(MyContext)
    const emailRef= useRef()
    const passRef= useRef()

    return (
        <Card className="login-card" >
            <form className="login-form" onSubmit={(e) => ctx.loginHandler(e, emailRef, passRef)}>
                <div className="login-email login-form-control">
                    <label htmlFor="login-email">Email:</label>
                    <input style={ctx.loginState.emailErr ? {backgroundColor: "#ff4444"} : {backgroundColor: "white"}}
                    id="login-email"
                    value={ctx.loginState.emailInput}
                    onChange={ctx.loginEmailHandler}
                    ref={emailRef}
                    onFocus= {ctx.emailCorrectHandler}
                    />
                </div>
                <div className="login-pass login-form-control">
                    <label htmlFor="login-pass">Password:</label>
                    <input style={ctx.loginState.passErr ? {backgroundColor: "#ff4444"} : {backgroundColor: "white"}}
                    id="login-pass" 
                    value={ctx.loginState.passInput}
                    onChange={ctx.loginPassHandler}
                    ref={passRef}
                    onFocus= {ctx.passCorrectHandler}
                    />
                </div>
                <div className="login-info">The password has to be at least 6 characters long. 
            <br/> The email has to contain a "@". </div>
            <button className="login-btn" type="submit">Log in</button>
            </form>
 
        </Card>
    )
}

export default LoginCard