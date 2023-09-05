import "./DateCom.css"
const DateCom = (props) => {
   
     
  
    const month = props.dateToshow.toLocaleString('en-US',{month:'long'});
    const date = props.dateToshow.toLocaleString('en-US', { day: '2-digit' });
    const year = props.dateToshow.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">
              {month}
            </div>
            <div className="expense-date__year">
              {year}
            </div>
            <div className="expense-date__day">
             {date}
            </div>
        </div>
        
    )
}

export default DateCom;