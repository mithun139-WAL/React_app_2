import { useState } from "react";
function Calculator(props) {
    let [result, setResult] = useState("");
    function calculator() {
        if (props.operation === "addition") {
            setResult(`Addition of ${props.num1} and ${props.num2} is ${props.num1 + props.num2}`);
        }
        else if (props.operation === "subtraction") {
            setResult(`Subtraction of ${props.num1} and ${props.num2} is ${props.num1 - props.num2}`);

        }
        else if (props.operation === "multiplication") {
            setResult(`Multiplication of ${props.num1} and ${props.num2} is ${props.num1 * props.num2}`);

        }
        else if (props.operation === "division") {
            setResult(`Division of ${props.num1} and ${props.num2} is ${props.num1 / props.num2}`);
        }
        else {
            setResult("No Operation is added");             
            }
    }
    return (
        <div class="Todo">
            <button onClick={calculator}>Mini Calculator</button>
            <h3>{result}</h3>
        </div>
    );
}
export default Calculator;