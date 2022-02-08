import { useState } from "react";

function Average() {
    let [number, setNum] = useState([]);
    function formSubmit(event) {
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.num;
        let newTag = [...number, inputTag.value];
        setNum(newTag);
        inputTag.value = "";

    }
    let average =0;
    let sum = 0;
    function findAvg(event) {
        number.map(function(val,index){
            sum += Number(val);
        })
        average = sum/number.length;
        document.querySelector(".show").innerHTML = `Average of numbers is ${average}`;

    }
    function removeAll(){
        setNum([]);
        document.querySelector(".show").innerHTML = "";
    }
    return (
        <div className="Todo">

            <form onSubmit={formSubmit}>
                <input type="number" placeholder="Enter No." name="num" />
                <button>Add Number</button>
                <button onClick={findAvg}>Find Average</button>
                <h2 className="show"></h2>
            </form>
            <button onClick={removeAll}>Remove All</button><br/>
            {
                number.map(function (val) {
                    return <p>{val} </p>
                })
            }
        </div>
    )
}
export default Average;