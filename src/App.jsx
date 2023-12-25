import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
import TodoItem from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";

const initialTodos = [
  { name: "Pozmywać naczynia", done: false, id: uuidv4() },
  { name: "Wyrzucić śmieci", done: true, id: uuidv4() },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState(initialTodos);
  function addItem(newTodoName) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        name: newTodoName,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setIsFormShown(false);
  }

  function deleteItem(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function toggleItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else return todo;
      })
    );
  }

  function moveUp(idx) {
    setTodos((prevTodos) => {
      const nextTodos = [...prevTodos];
      [nextTodos[idx - 1], nextTodos[idx]] = [
        nextTodos[idx],
        nextTodos[idx - 1],
      ];
      return nextTodos;
    });
  }
  function moveDown(idx) {
    setTodos((prevTodos) => {
      const nextTodos = [...prevTodos];
      [nextTodos[idx], nextTodos[idx + 1]] = [
        nextTodos[idx + 1],
        nextTodos[idx],
      ];
      return nextTodos;
    });
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        <button
          onClick={() => setIsFormShown((state) => !state)}
          className={styles.button}
        >
          {isFormShown ? "-" : "+"}
        </button>
      </header>
      {isFormShown && <Form onFormSubmit={addItem} />}
      <ul>
        {todos.map(({ id, name, done }, idx) => (
          <TodoItem
            name={name}
            done={done}
            key={id}
            onDeleteButtonClick={() => deleteItem(id)}
            onToggleButtonClick={() => toggleItem(id)}
            first={idx === 0}
            last={idx === todos.length - 1}
            onMoveUp={() => moveUp(idx)}
            onMoveDown={() => moveDown(idx)}
          />
        ))}
      </ul>
    </div>
  );
}

// 2. Możliwość edycji zadań

export default App;
