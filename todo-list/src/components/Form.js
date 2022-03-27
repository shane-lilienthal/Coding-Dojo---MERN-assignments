import { useState } from "react";

const Form = (props) => {
    const [task, setTask] = useState("");
    const { taskList, setTaskList } = props;

    const createTask = (e) => {
        e.preventDefault();
        const newTask = {
            taskText: task,
            completed: false,
        };
        setTaskList([...taskList, newTask]);
        setTask("");
    };

    const handleTask = (e) => {
        setTask(e.target.value);
    };

    return (
        <form onSubmit={createTask}>
            <div>
                <input type="text" value={task} onChange={(e) => handleTask(e)} />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default Form;
