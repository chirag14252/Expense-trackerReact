import "./NewExpenses.css"
import GeneralForm from "../Form/GeneralForm"
const NewExpenses = (props)=>{
    const ExpensesData = (data)=>{
        const newData = {
            ...data
        }
        props.onExpenseAddHandler(newData);
    }
    return(
     <div className="new-expense">
      <GeneralForm newDataObj={ExpensesData}/>
     </div>
    )
}

export default NewExpenses;