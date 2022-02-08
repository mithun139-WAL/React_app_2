import {useState} from "react";
function Todos(){
    let [todo, setTodo] = useState([
    ]);
    function addTodo(event){
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.todo;
        let newTodo = [...todo, inputTag.value];
        setTodo(newTodo);
        inputTag.value = "";
    }
    function removeAll(){
        setTodo([]);
    }
    return (
        <div className="Todo">
            <form onSubmit={addTodo}>
                <input type="text" name="todo" placeholder="Enter a task todo"/>
                <button>Add Todo</button>
            </form>
            <button onClick={removeAll}>Remove All</button>
            <h3>Todos</h3>
            {todo.map(function (val,index){
                return <div>{index+1}. {val}</div>;
            })}
        </div>
    );
}

export default Todos;