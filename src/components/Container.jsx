import styles from "../module css/Container.module.css";

const Container = (props) => {
  return <div className={` mx-auto ${styles.container}`}>{props.children}</div>;
};

export default Container;
