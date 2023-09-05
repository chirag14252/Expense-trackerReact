import "./Item.css"
import "./UI/Card.css"
import DateCom from "./Date/DateCom"
import Card from "./UI/Card"
import { useState } from "react";
const Item = (props) => { //object destruct
   

    return (
        <>
        <Card className="expense-item">
            <DateCom dateToshow = {props.content.date}/>
            <div className="expense-item__description">
                <h2>{props.content.title}</h2>
                <div className="expense-item__price">{props.content.amount}</div>
            </div>
        </Card>
       </> 
    )
}
export default Item;