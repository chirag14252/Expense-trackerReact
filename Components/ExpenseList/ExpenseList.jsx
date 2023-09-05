import Item from "../Item"
import "./ExpenseList.css"
const ExpenseList = (props)=>{
    return(
        <div className="expenses">
        {
         props.dataList.length === 0 ? <p className="no-data">no data available</p>:
         props.dataList.map((item,idx)=>{
             return  <Item key ={idx} content = {item}/>
         })
        }
      </div>

    )
}

export default ExpenseList;