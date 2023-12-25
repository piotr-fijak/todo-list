import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

function Form({ onFormSubmit, initialValue = "", id }) {
  const [inputValue, setInputValue] = useState(initialValue);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputValue, id);
        setInputValue("");
      }}
      className={styles.form}
    >
      <input
        onChange={(evt) => setInputValue(evt.target.value)}
        className={styles.input}
        type="text"
        maxLength={35}
        value={inputValue}
      />
      <Button disabled={inputValue.length === 0 ? true : false}>Dodaj</Button>
    </form>
  );
}

export default Form;
