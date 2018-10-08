import React from "react";
import { render } from "react-dom";
import "./styles.css";
import TodoApp from "./TodoApp";

const todoItems = [];
todoItems.push({ index: 1, value: "Buy Milk", done: false });
todoItems.push({ index: 2, value: "Call Dad", done: false });
todoItems.push({ index: 3, value: "Fill Gas", done: false });

render(<TodoApp items={todoItems} />, document.getElementById("root"));

