import "./SubTask.css";
import "./Task.css";
import React, { useEffect } from "react";
import { useState } from "react";

const Subtask = ({ task }) => {
  const [taskRemaining, setTaskRemaining] = useState(0);
  const [subTaskData, setSubTaskData] = useState("");
  const [index, setIndex] = useState(0);
  // const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (task && task.subtask) {
      // console.log("helo");
      const task_remain = task.subtask.remainingtask;
      setTaskRemaining(task_remain);
    }
  }, [task]);

  useEffect(() => {
    setIndex(0);
  }, [task]);

  //! a simple utility function which is here to create  the subtasks object

  const createSbtObject = (subtask) => {
    return {
      sbt: subtask,
      isCompleted: false,
    };
  };

  //! this function will handle the subtask input
  //! this function will first be storing the subtasks in the subtasks object
  const handleOnChange = (event) => {
    event.preventDefault();
    setSubTaskData(event.target.value);
  };

  const handleSubtaskInput = (task, event) => {
    event.preventDefault();

    if (subTaskData.trim() === "") return; //! if the subtask is empty then we will not do anything

    const sbtObject = createSbtObject(subTaskData); //! notice the boolean here is false because we are creating a new subtask
    task.subtask.subtasks.push(sbtObject); //? first we need to push the object we have created here

    if (task.subtask.subtasks[index].sbt === "") {
      task.subtask.subtasks[index].sbt = subTaskData;
      setIndex(index + 1);
    }

    // console.log(task);
    setSubTaskData("");
    setTaskRemaining((prevTaskRemaining) => prevTaskRemaining + 1); //! this is for the task remaining
    task.subtask.subtasks[index].isCompleted = false;
    console.log(taskRemaining); //! THIS IS THE PROBLEM WHICH WILL HELP YOU SOLVE THE PROBLEM 3 FROM TODO.md
    let temp = taskRemaining;

    task.subtask.remainingtask = temp + 1;
  };

  //! below the function which will handle the subtask on click //? dont need it now

  // const handleSubtaskParaOnClick = (subtask , event) => {
  //   // const element = event.target;
  //   // event.preventDefault();
  //   // event.stopPropagation(); // Prevent the click event from propagating to the checkbox

  //   // console.log("para clicked")
  //   // if (subtask.isCompleted === false) {
  //   //   setTaskRemaining((prevTaskRemaining) =>
  //   //     prevTaskRemaining > 0 ? prevTaskRemaining - 1 : prevTaskRemaining
  //   //   );
  //   //   subtask.isCompleted = true;
  //   //   subtask.remainingtask = taskRemaining;
  //   // } else {
  //   //   setTaskRemaining((prevTaskRemaining) => prevTaskRemaining + 1);
  //   //   subtask.isCompleted = false;
  //   //   subtask.remainingtask = taskRemaining;
  //   // }
  // };

  const handleSubtaskInputOnClick = (subtask, event) => {
    // const element = event.target;
    console.log("input checkbox clicked");
    if (subtask.isCompleted === false) {
      setTaskRemaining((prevTaskRemaining) =>
        prevTaskRemaining > 0 ? prevTaskRemaining - 1 : prevTaskRemaining
      );
      subtask.isCompleted = true;
      subtask.remainingtask = taskRemaining;
    } else {
      setTaskRemaining((prevTaskRemaining) => prevTaskRemaining + 1);
      subtask.isCompleted = false;
      subtask.remainingtask = taskRemaining;
    }
  };

  return (
    <>
      <div className="subtask-wrapper">
        <div className="subtask-nav">
          {task && task.name.trim() !== "" ? (
            <h2 className="taskname">{task.name}</h2>
          ) : (
            <h2 className="taskname">YOUR TASK</h2>
          )}
          <p className="task-remaining">Task Remaining : {taskRemaining}</p>
        </div>

        {/* <div className="subtask-list">
          {task &&
            task.subtask.subtasks.map((subtask, subtaskIndex) => (
              <div className="subtasks" key={subtaskIndex}>
                <input
                  type="checkbox"
                  id={`sbt-${subtaskIndex}`}
                  // checked={subtask.isCompleted} // Add this line to ensure the checkbox reflects the subtask's completion statu
                  onClick={(event) => handleSubtaskInputOnClick(subtask, event)}
                />
                <label htmlFor={`sbt-${subtaskIndex}`}>
                  <span className="custom-checkbox "></span>
                  <p
                    className="subtask"
                    // onClick={(event) =>           //! this is shit dont use it here this was the fucking reason 
                    //   handleSubtaskParaOnClick(subtask, event)
                    // }
                  >
                    {subtask.sbt}
                  </p>
                </label>
              </div>
            ))}
        </div> */}

        <div className="subtask-list">
          {task &&
            task.subtask.subtasks.map((subtask, subtaskIndex) => (
              <div className="subtasks" key={subtaskIndex}>
                {subtask.isCompleted ? (
                  <>
                    <input
                      type="checkbox"
                      id={`sbt-${subtaskIndex}`}
                      checked={true} // Always set to true when subtask is completed
                      onClick={(event) =>
                        handleSubtaskInputOnClick(subtask, event)
                      }
                    />
                    <label htmlFor={`sbt-${subtaskIndex}`}>
                      <span className="custom-checkbox "></span>
                      <p
                        className="subtask"
                        // onClick={(event) =>
                        //   handleSubtaskOnClick(subtask, event)
                        // }
                      >
                        {subtask.sbt}
                      </p>
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      id={`sbt-${subtaskIndex}`}
                      onClick={(event) =>
                        handleSubtaskInputOnClick(subtask, event)
                      }
                    />
                    <label htmlFor={`sbt-${subtaskIndex}`}>
                      <span className="custom-checkbox "></span>
                      <p
                        className="subtask"
                        // onClick={(event) =>
                        //   handleSubtaskOnClick(subtask, event)
                        // }
                      >
                        {subtask.sbt}
                      </p>
                    </label>
                  </>
                )}
              </div>
            ))}
        </div>

        {task && task.name.trim() !== "" && (
          <form
            className="subtask-input-wrapper"
            onSubmit={(event) => handleSubtaskInput(task, event)}
          >
            <button className="subtask-enter">+</button>
            <input
              type="text"
              id="subtask-input"
              spellCheck="false"
              autoComplete="off"
              placeholder="Add Subtask"
              onChange={handleOnChange}
              value={subTaskData}
            />
          </form>
        )}

        <div className="subtask-footer">
          <button className="Delete-complete">DELETE THIS TASK</button>
          <button className="Delete-whole">
            DELETE THE COMPLETED SUBTASKS
          </button>
        </div>
      </div>

      {/* <button className="test-checkbox" onClick={toggleCheckbox}>
        CLICK TO TEST
      </button> */}
    </>
  );
};

export default Subtask;
