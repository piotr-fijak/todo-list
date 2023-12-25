import styles from "./Button.module.css";

function Button({ children, onClick, disabled }) {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
