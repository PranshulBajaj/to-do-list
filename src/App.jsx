import ToDoHeading from "./components/ToDoHeading";
import ToDoInput from "./components/ToDoInput";
import ToDoItems from "./components/ToDoItems";
import styles from "./App.module.css";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  let [todoList, setTodoList] = useState(() => {
    const storedList = localStorage.getItem("todoList");
    return storedList ? JSON.parse(storedList) : [];
  });

  let addToDo = (itemName, itemDate) => {
    let newItem = {
      todoName: itemName,
      todoDate: itemDate,
    };
    let newToDoList = [...todoList, newItem];
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
    setTodoList(newToDoList);
  };

  let deleteToDo = (deletedItem) => {
    let newToDoList = todoList.filter(
      (toDo) => toDo.todoName.toLowerCase() !== deletedItem.toLowerCase()
    );
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
    setTodoList(newToDoList);
  };

  return (
    <>
      <ToDoHeading></ToDoHeading>
      <Container>
        <ToDoInput tasks={todoList} addToDo={addToDo}></ToDoInput>
        <ToDoItems tasks={todoList} deleteToDo={deleteToDo}></ToDoItems>
      </Container>
    </>
  );
}

export default App;
