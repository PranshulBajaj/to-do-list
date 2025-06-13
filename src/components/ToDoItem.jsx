import styles from "../module css/ToDoItem.module.css";

function ToDoItem(props) {
  let { item, handleDeleteButton } = props;
  return (
    <div
      className={`row d-flex justify-content-center mx-auto py-2 ${styles.itemRow} `}
    >
      <div className=" col-5 col-md-7 d-flex align-items-center ">
        {item.todoName}
      </div>
      <div className="col-4 col-md-3 d-flex align-items-center ">
        {item.todoDate}
      </div>
      <div className="col-3 col-md-2  ">
        <button
          type="button"
          className={`btn btn-danger d-flex justify-content-center align-items-center ${styles.myButton}`}
          onClick={handleDeleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
