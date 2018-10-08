import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


class TodoHeader extends React.Component {
  render() {
    return <h1>My Todo list</h1>;
  }
}

export default class TodoApp extends React.Component {

  state = { todoItems: this.props.items }

  addItem = (todoItem) => {
    const {todoItems} = this.state
    todoItems.push({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems });
  }

  removeItem = (itemIndex) => {
    const { todoItems } = this.state
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems });
  }

  markTodoDone = (itemIndex) => {
    const { todoItems } = this.state
    const todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems });
  }

  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
        <TodoForm onAddItem={this.addItem} />
      </div>
    );
  }
}
