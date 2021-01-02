import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar HTML to React"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar State di React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar HTML to React"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar State di React"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
