import "./Card.css"
const Card = (props)=>{
    const targetCss = 'card '+ props.className;
    return(
        <div className={targetCss}>{props.children}</div>
    )
}

export default Card;