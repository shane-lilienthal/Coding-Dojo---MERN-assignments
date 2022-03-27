import "./App.css";
import react, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Form taskList={taskList} setTaskList={setTaskList} />
      <h2>Your Tasks</h2>
      <Display taskList={taskList} setTaskList={setTaskList} />
      </div>
  );
}

export default App;
