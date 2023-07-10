import React, { useState, useRef } from "react";
import TextInput from "../TextInput/TextInput";
import Task from "../../Task/Task";
import Select from "react-select";
import ReactTooltip from "react-tooltip";

function ToDo() {
  const [TaskCreator, setTasks] = useState([]);

  const [completedState, setCompletedState] = useState([]);

  const [AllState, setAllState] = useState([]);

  const [NotcompletedState, setNotCompletedState] = useState([]);

  const [inputVal, setInputVal] = useState({ Name: "", Desc: "" });

  const [print, setPrint] = useState(false);

  const [message, setmessage] = useState(null);

  const [filterValue, setfilterValue] = useState({
    value: "",
    label: "",
  });

  let filterOptions = [
    { value: "Completed", label: "Completed" },

    { value: "Not-Completed", label: "Not-Completed" },
    { value: "All", label: "All" },
  ];

  //Insert status into tasks

  function taskStatus(id, status) {
    for (let j = 0; j < TaskCreator.length; j++) {
      if (id == TaskCreator[j].id) {
        TaskCreator[j].Status = status;
      }
    }
    for (let k = 0; k < AllState.length; k++) {
      if (id == AllState[k].id) {
        AllState[k].Status = status;
      }
    }

    // console.log(TaskCreator);
  }

  //delete task

  function deleteTask(id) {
    const deletedTasks = TaskCreator.filter((task1) => task1.id !== id);
    setTasks(deletedTasks);
    setAllState(deletedTasks);
  }

  //updating task based on edit

  function updateTask(id, newName, newDesc) {
    const updatedTasks = TaskCreator.map((task) => {
      if (id == task.id) {
        return { ...task, Name: newName, Desc: newDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
    setAllState(updatedTasks);
  }

  //fetching values

  function fetchInput(e) {
    const { name, value } = e.target;

    setInputVal((prev) => {
      return { ...prev, [name]: value };
    });
  }

  //Add ToDo

  function handleSubmit() {
    let inputCopy = [...TaskCreator];

    inputCopy.push(inputVal);

    for (let i = 0; i < inputCopy.length; i++) {
      inputCopy[i].id = i;
    }

    setTasks(inputCopy);

    setAllState(inputCopy);

    setPrint(false);
  }

  // console.log(TaskCreator);

  if (print) {
    handleSubmit();
  }

  //Assigning live status filter values to temp array

  function handlefilterStatus() {
    handlesubfilter();
  }

  function handlesubfilter() {
    let completedState_copy = [...completedState];

    let NotcompletedState_copy = [...NotcompletedState];

    TaskCreator.map((cs) => {
      if (cs.Status === "Completed") {
        completedState_copy.push(cs);
      } else if (cs.Status === "Not-Completed") {
        NotcompletedState_copy.push(cs);
      }
    });

    // console.log(completedState_copy);
    // console.log(NotcompletedState_copy);
    setCompletedState(completedState_copy);
    setNotCompletedState(NotcompletedState_copy);

    // console.log(completedState);
    // console.log(NotcompletedState);
    // console.log(`filter:${filterValue.value}`);

    if (filterValue.value === "Completed") {
      setTasks(completedState);
      // console.log(completedState);
    } else if (filterValue.value === "Not-Completed") {
      setTasks(NotcompletedState);
      // console.log(completedState);
    } else if (filterValue.value === "All") {
      setTasks(AllState);
      // console.log(completedState);
    }
  }

  //Clear button

  function clearVal() {
    setInputVal({ Name: "", Desc: "" });
  }

  //mouse funtion
  function clickMessagefunc() {
    setmessage("Please commence with double click");
  }
  //message out

  function clickMessageOutfunc() {
    setmessage("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="header mt-3">My ToDo</div>
        {/* Inputs */}
        <form>
          {/* Name */}
          <div className="row mt-3">
            <div className="col-md-4 m-1">
              <input
                placeholder="ToDo Name"
                type="text"
                value={inputVal.Name}
                name="Name"
                onChange={fetchInput}
                id="input"
                className="form-control"
              />
            </div>

            {/* Description */}

            <div className="col-md-4 m-1">
              <input
                type1="text"
                placeholder="ToDo Description"
                value={inputVal.Desc}
                onChange={fetchInput}
                name="Desc"
                id="input"
                className="form-control"
              />
            </div>

            {/* Add ToDo Button*/}

            <button
              type="button"
              onClick={() => setPrint(true)}
              className="col-md-2 btn-sm m-1"
              id="addToDo"
            >
              Add ToDo
            </button>

            {/* Clear button */}

            <button
              type="button"
              className="col-md-2 btn-sm m-1"
              onClick={clearVal}
              id="clear"
            >
              Clear
            </button>
          </div>
        </form>
        {/* Created Tasks Status */}
        <div className="row mt-5">
          <div className="subHeader col-md-12">
            <div className="col-md-6">
              <h6 style={{ float: "left" }}>My ToDos</h6>
            </div>

            {/* Status Filter */}

            {/* Status Dropdown */}

            <div
              style={{ margin: "3px", width: "200px", float: "right" }}
              className="col-md-3"
            >
              <Select
                options={filterOptions}
                placeholder="Status Filter"
                defaultValue={filterValue}
                onChange={setfilterValue}
                isSearchable
                styles={{
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "rgb(78 115 101)",
                    fontSize: "10",
                    fontWeight: "500",
                  }),
                  clearIndicator: () => ({
                    color: "red",
                  }),
                  dropdownIndicator: () => ({
                    color: "darkGreen",
                  }),
                  control: (baseStyles) => ({
                    ...baseStyles,
                    border: "2px solid rgb(30 195 132)",
                  }),
                  multiValueRemove: (baseStyles, state) => ({
                    ...baseStyles,
                    color: state.isFocused ? "red" : "gray",
                    backgroundColor: state.isFocused ? "black" : "lightGreen",
                  }),
                }}
              />
            </div>
            {/* filter button */}
            <div
              className="col-md-3"
              style={{
                float: "right",
                marginTop: "4px",
                marginRight: "-89px",
              }}
            >
              <button
                onMouseOver={clickMessagefunc}
                onMouseOut={clickMessageOutfunc}
                className="btn btn-danger btn-md"
                onClick={handlefilterStatus}
              >
                Filter
              </button>

              <div className="mt-2" style={{ fontSize: "11px" }}>
                {message}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Creator */}

      <div className="row">
        {TaskCreator.map((d, i) => (
          <Task
            data={d}
            key={`Task-${i}`}
            updateTask={updateTask}
            deleteTask={deleteTask}
            taskStatus={taskStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDo;
