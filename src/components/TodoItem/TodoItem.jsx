import Button from "../Button/Button";
import styles from "./TodoItem.module.css";

function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onToggleButtonClick,
  first,
  last,
  onMoveUp,
  onMoveDown,
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!first && <Button onClick={onMoveUp}> &uarr;</Button>}
      {!last && <Button onClick={onMoveDown}> &darr;</Button>}
      <Button onClick={onToggleButtonClick}>
        {done ? "Nie zrobione" : "Wykonane"}
      </Button>
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </li>
  );
}

export default TodoItem;
