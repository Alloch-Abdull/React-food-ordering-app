import React from "react";
import "./Description.css"
import Card from "../UI/Card";


const Description = () => {
    return (
        <Card className="description-card">
            <div className="description-title">
                Delicious Food, Delivered To You!
            </div>
            <div className="description">
                Choose your favourite meal from our broad selection of available
                meals and enjoy a delicious lunch or dinner at home.<br /><br />
                All our meals are cooked with high-quality ingredients, just-in-time and of course
                by experienced chefs!
            </div>
        </Card>
    )

}

export default Description