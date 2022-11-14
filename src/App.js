import "./App.css";

import Todos from "./components/Todos";
import DisplayTodos from "./components/display/DisplayTodos";

function App() {
  return (
    <div className="App">
      <h1>What's the plan for today?</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
