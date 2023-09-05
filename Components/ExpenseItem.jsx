import Item from "./Item";
import ExpensesFilter from "./Filter/ExpenseFilter";
import "./UI/Card.css"
import { useState } from "react";
import Card from "./UI/Card";
import "./ExpenseItem.css"
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpensesChart from "./ExpensesChart";
const ExpenseItem = (props) =>{
const [filteredYear,setFilteredYear] = useState("2020");


const DateObjListener = date_item =>{
   setFilteredYear(date_item);  
}

// updating the list

// for change in para graphs
//Creating an updated array

const filteredExpense = props.items_id.filter((items)=>{
  return items.date.getFullYear().toString() == filteredYear
})

return(
 <div className="whole-section">
 
 <ExpensesFilter addedDate ={filteredYear} onDateListener={DateObjListener}/>
 <ExpensesChart expense = {filteredExpense}/>
 <ExpenseList  dataList = {filteredExpense}/>
 </div>
)
}

export default ExpenseItem;