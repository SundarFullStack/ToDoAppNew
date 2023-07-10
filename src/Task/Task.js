import React, { useState } from "react";
import EditTask from "../components/EditTask/EditTask";
import Select from "react-select";

export default function Task({
  data = {},
  updateTask = {},
  deleteTask = {},
  taskStatus = {},
}) {
  //Status State
  const [statusValue, setstatusValue] = useState({
    value: "",
    label: "",
  });

  let options = [
    { value: "Completed", label: "Completed" },
    { value: "Not-Completed", label: "Not-Completed" },
  ];
  //Handling Status values and push to ToDo
  function handleSelect(id, status) {
    // console.log(statusValue.value);
    taskStatus(data.id, statusValue.value);
  }

  //according to stauts updation

  if (setstatusValue != "") {
    handleSelect();
  }

  return (
    <div
      id="card"
      className="card mt-5 m-4 col-4 h-50 d-flex flex-column"
      style={{ backgroundColor: "rgb(138 235 198 / 75%)" }}
    >
      <div className="box_inside mt-3">
        <h6>Task- {data.id + 1}</h6>
        {/* Name */}
        <p className="text-start m-3">
          <b>Name: </b>
          {data.Name}
        </p>

        {/* Description */}

        <p className="text-start m-3">
          <b>Description: </b>
          {data.Desc}
        </p>

        {/* Status Dropdown */}
        <div style={{ margin: "3px", width: "200px" }}>
          <Select
            options={options}
            placeholder="Select Status"
            className="form-select"
            defaultValue={statusValue}
            onChange={setstatusValue}
            styles={{
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: "rgb(78 115 101)",
                fontSize: "10",
                fontWeight: "500",
              }),
            }}
          />
        </div>

        {/* Edit & Delete buttons */}
        <div className="twoButtons mt-3">
          <EditTask
            name={data.Name}
            id={data.id}
            description={data.Desc}
            updateTask={updateTask}
          />

          <button
            className="delete_btn btn btn-danger btn-sm"
            onClick={(e) => {
              e.preventDefault();
              deleteTask(data.id);
              console.log(data.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
