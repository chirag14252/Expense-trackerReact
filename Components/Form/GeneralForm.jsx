import { useState } from "react";
import "./GeneralForm.css"

const GeneralForm = (props) => {
    const [titleForm, changeTitleForm] = useState('');
    const [NumberForm, changeNumberForm] = useState('');
    const [DateForm, changeDateForm] = useState('');
    const [expenseData, changeExpenseData] = useState({});
    //useState for conditional rendering:
    //problem statement : if i click on add expenses then div will show , if i again click on it will
    // disappear again and when i click on cancel button , the form disappear again
    const [showForm, showFormFunction] = useState(0);



    // const [obj,changeFun] = useState({
    //     titleForm:'',
    //     NumberForm:'',
    //     DateForm:''
    // });
    // console.log(obj);
    const inputHandler = (identifier, value) => {
        if (identifier === "title") {
            changeTitleForm(value);
        }
        else if (identifier === "amount") {
            changeNumberForm(value);
        }
        else if (identifier === "Date") {
            changeDateForm(value);
        }
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            "title": titleForm,
            "amount": NumberForm,
            "date": new Date(DateForm)
        }
        changeExpenseData(expenseData);

        props.newDataObj(expenseData);
        changeDateForm("");
        changeTitleForm("");
        changeNumberForm("");
    }
    return (
        <form onSubmit={SubmitHandler}>
            {showForm ? (<div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={titleForm} onChange={(e) => {
                        inputHandler("title", e.target.value);
                        changeTitleForm(e.target.value);
                    }} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={NumberForm} onChange={
                        (e) => {
                            inputHandler("amount", e.target.value);
                            changeNumberForm(e.target.value);
                        }
                    } />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={DateForm} onChange={(e) => {
                        inputHandler("Date", e.target.value);
                        changeDateForm(e.target.value);
                    }} />
                </div>
            </div>) : null}
            <div className="button-section">
                {showForm?(<div className="new-expense__actions">
                    <button onClick={() => {
                        if (showForm == 1) {
                            showFormFunction(0);
                        }
                    }}>Cancel</button>
                </div>):null}
                <div className="new-expense__actions">
                    <button type="submit" onClick={() => {
                        if (showForm == 0) {
                            showFormFunction(1);
                        }
                        else {
                            showFormFunction(0);
                        }
                    }}>Add Expenses</button>
                </div>
            </div>
        </form>
    )
}

export default GeneralForm;