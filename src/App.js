import { useState } from "react";
import MyHeader from "./components/header";
import TaskItem from "./components/task";
import tasksData from "./data/tasksData"
import Status from "./enums/Status"
import "./styles.css";




export default function App() {
  const [tasks, setTasks] = useState([...tasksData])

  function handleOnClickDelete() {
    let remainingTasks = tasks.filter((task) => { return task.status === Status.NOT_DONE })
    setTasks(remainingTasks);
  }

  function handleOnClickTask(index) {
    let currentTasks = [...tasks];
    currentTasks[index].status = currentTasks[index].status === Status.NOT_DONE ? Status.DONE : Status.NOT_DONE;
    setTasks(currentTasks);
  }
  console.log("hello")
  return (
    <div className="Application">
      <MyHeader />
      {
        tasks.length === 0 ?
          <i>Nothing to do. Sleep Buddy!</i> :
          <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {tasks.map((task, index) => {
                return (
                  <TaskItem key={index} data={task} index={index} handleOnClick={handleOnClickTask}></TaskItem>
                )
              })}
            </ul>

            <br />
            <button onClick={handleOnClickDelete}>Remove Completed</button>
          </div>
      }
    </div>
  );
}
