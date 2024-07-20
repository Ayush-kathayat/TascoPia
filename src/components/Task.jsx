import "./Task.css";
import "./SubTask.jsx";
import CreateObject from "../utils/createObject";
import React, { useEffect, useState } from "react";
import Subtask from "./SubTask.jsx";

const Task = () => {
  // const [placeHolder, setPlaceHolder] = useState("");
  const [inputTaskData, setInputTaskData] = useState(""); //! for my input task text
  const [tasks, setTasks] = useState([]); //! this state is an array
  const [latestTask, setLatestTask] = useState(null); //! this is for to store the latest task a single task
  const [clickedElement, setClickedElement] = useState(null); //! this is for to store the clicked element

  // const placeText = "ENTER YOUR TASK";

  // //! for the placeholder typing animation

  // useEffect(() => {
  //   const typeAnime = async () => {
  //     while (true) {
  //       let place_holder = "";
  //       for (let index = 0; index < placeText.length; index++) {
  //         place_holder += placeText.charAt(index);
  //         setPlaceHolder(place_holder);
  //         await delay(200);
  //       }
  //     }
  //   };

  //   typeAnime();
  // }, []);

  // function delay(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  //! for handling input form

  const handleOnChange = (event) => {
    event.preventDefault(); //* Prevent default behavior
    setInputTaskData(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // console.log(inputTaskData); //! in here i will firstly call that createObject

    const task = CreateObject(inputTaskData);

    // console.log(task);

    //! Now secondly in here i will push that returned object to the task state

    setTasks([...tasks, task]);
    setLatestTask(task);
    setInputTaskData("");
  };

  // useEffect(() => {
  //   for (let index = 0; index < tasks.length; index++) {
  //     console.log(tasks[index]);
  //   }
  // },[tasks]);

  const handleTaskOnClick = (event) => {
    const task_id = event.target.id;
    console.log(task_id);
    const elem = event.target;
    const task = tasks.find((task) => task.id === task_id);

    if (clickedElement) {
      // Remove the "task-clicked" class from the previously clicked element
      clickedElement.classList.remove("task-clicked");
    }

    // Add the "task-clicked" class to the newly clicked element
    elem.classList.add("task-clicked");

    // Update the clicked element in the state
    setClickedElement(elem);

    console.log(task);
    setLatestTask(task);
  };

  return (
    <>
      <div className="task-list-wrapper" data-aos="fade-right">
        <div className="task-title-info">
          <h1 className="task-list-title">MY TASKS</h1>
        </div>

        <div className="task-wrapper-container">
          <ul className="task-list" onClick={handleTaskOnClick}>
            {tasks.map((task) => (
              <li key={task.id} className="task" id={task.id}>
                {task.name}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="task-input-wrapper"
          action=""
          onSubmit={handleSubmitForm}
        >
          <input
            type="text"
            id="task-input"
            spellCheck="false"
            autoComplete="off"
            placeholder="ENTER YOUR TASK"
            onChange={handleOnChange}
            value={inputTaskData}
          />
          <button className="task-enter">+</button>
        </form>
      </div>
    </>
  );
};

export default Task;
