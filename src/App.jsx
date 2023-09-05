import "./App.css"
import React, { useEffect, useState } from "react";
import "../Components/Filter/ExpenseFilter.css"
import ExpenseItem from '../Components/ExpenseItem';
import NewExpenses from "../Components/NewExpenses/NewExpenses";
const Dummy = [
  {
    
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {  title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
   
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [newData,newDataFun] = useState(Dummy);
  const FinalDataOb  = (data)=>{
   newDataFun((prev_expense)=>[...prev_expense,data])

  }

  return (
    <>
    <NewExpenses onExpenseAddHandler = {FinalDataOb} />
    <ExpenseItem items_id ={newData} />
    </>
  )
  }
  //can also pass the element with the help of react library
  // return React.createElement('div', {},
  // React.createElement(ExpenseItem, {items_id:expenses})
  // )

export default App;
