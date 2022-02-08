import PropTypes from "prop-types";
function AddNums(props){
    return(
        <div className="Todo">
            <h3>Num 1 : {props.num1}</h3>
            <h3>Num 2 : {props.num2}</h3>
            <h3>Sum of the Two numbers is {props.num1 + props.num2} </h3>
        </div>
    )
}
AddNums.propTypes = {
    num1 : PropTypes.number,
    num2 : PropTypes.number
}

export default AddNums;