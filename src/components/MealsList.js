import "./MealsList.css"
import MealItem from "./MealItem";
import { useContext } from "react";
import MyContext from "../Data/Context";
import Card from "../UI/Card";


const MealsList = () => {
    const ctx = useContext(MyContext)

    return (
        <Card className="meals-list">
            {ctx.meals.map( meal => (
                <MealItem 
                title={meal.title}
                description={meal.description}
                price={meal.price}
                key={meal.id}
                value={meal.value}
                amountHandler={meal.amountHandler}
                amountErr={meal.err}
                />
            ))}
        </Card>
    )
}

export default MealsList