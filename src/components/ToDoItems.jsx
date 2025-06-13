import ToDoItem from "./ToDoItem";

function ToDoItems({ tasks , deleteToDo }) {
  return (
    <>
      {tasks.map((toDo) => {
        return (
          <ToDoItem
            key={toDo.todoName}
            item={toDo}
            handleDeleteButton={()=> deleteToDo(toDo.todoName)}
          ></ToDoItem>
        );
      })}
    </>
  );
}

export default ToDoItems;
