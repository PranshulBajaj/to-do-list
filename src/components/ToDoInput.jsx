import { useState } from "react";
import styles from "../module css/ToDoInput.module.css";

function ToDoInput({ tasks, addToDo }) {
  let [itemName, setItemName] = useState("");
  let [itemDate, setItemDate] = useState("");

  let handleName = (event) => {
    setItemName(event.target.value);
  };

  let handleDate = (event) => {
    itemDate = event.target.value;
    let [year, month, date] = itemDate.split("-");
    setItemDate(`${date}/${month}/${year}`);
  };

  let handleEnter = (event) => {
    if (event.key === "Enter") {
      handleAddButton();
    }
  };

  let handleAddButton = () => {
    if (tasks.some((item) => item.todoName.toLowerCase() === itemName.toLowerCase())) {
      alert("Task already exists!");
    } else if (itemDate && itemName) {
      addToDo(itemName, itemDate);
      setItemDate("");
      setItemName("");
    } else {
      alert("Please enter valid task and due-date!");
    }
  };

  return (
    <div
      className={`row d-flex justify-content-center mx-auto py-2 ${styles.inputRow}`}
    >
      <div className=" col-5 col-md-7 ">
        <input
          type="text"
          id="taskInput"
          className={styles.nameInput}
          placeholder="Enter task here.."
          onChange={handleName}
          onKeyUp={handleEnter}
          value={itemName}
        />
      </div>
      <div className="col-4 col-md-3 ">
        <input
          type="date"
          id="taskDate"
          onChange={handleDate}
          onKeyUp={handleEnter}
          className={styles.dateInput}
          value={itemDate ? itemDate.split("/").reverse().join("-") : ""}
        />
      </div>
      <div className="col-3 col-md-2 ">
        <button
          type="button"
          className={`btn btn-success d-flex justify-content-center align-items-center ${styles.myButton}`}
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default ToDoInput;
