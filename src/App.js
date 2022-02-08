// import logo from './logo.svg';
import './App.css';
import Todos from './Todo';
import Average from './Averagenums';
import AddNums from './Addnums';
import Calculator from './MiniCalc';
function App() {
  return (
    <><div className="App">
      <h1>Welcome to react</h1>
      <div className="App-div">Assignments 8 Feb 2022</div>
    </div>
      <Todos></Todos>
      <Average></Average>
      <AddNums
        num1={13}
        num2={9}
      ></AddNums>
      <Calculator
        num1={13}
        num2={9}
        operation="division"
      ></Calculator>
    </>
  );
}

export default App;
