import React from "react";

const Display = (props) => {

    const {taskList, setTaskList} = props;

    const deleteTask = (indexFromBelow) => {
        const filteredTasks = taskList.filter((task, idx) => {
            return indexFromBelow !== idx;
        });
        setTaskList(filteredTasks);
    };

    const completeTask = (indexFromBelow) => {
        const taskToComplete = { ...taskList[indexFromBelow] };
        if (taskToComplete.completed === false) {
            taskToComplete.completed = true;
        } else {
            taskToComplete.completed = false;
        }
        setTaskList(
            [...taskList.slice(0, indexFromBelow), taskToComplete].concat(taskList.slice(indexFromBelow + 1))
        );
    }

    return taskList.map((task, index) => {
            return (
                <div key={index}>
                    <h3>{task.taskText}</h3>
                    <div>
                    <label>Completed: </label>
                    <input type="checkbox" onChange={() => completeTask(index)} />
                    </div>
                    <button onClick={() => deleteTask(index)}>DELETE</button>
                    <hr />
                </div>
            );
        });
    };

    export default Display;