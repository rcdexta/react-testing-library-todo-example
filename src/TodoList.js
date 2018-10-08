import React from 'react'
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component {
  render() {
    const {items, removeItem, markTodoDone} = this.props
    return (
      <table className="pure-table pure-table-horizontal">
        <tbody>
        {
          items.map((item, index) => <TodoListItem key={index} {...{item, index, removeItem, markTodoDone}} />)
        }
        </tbody>
      </table>
    )

  }
}
