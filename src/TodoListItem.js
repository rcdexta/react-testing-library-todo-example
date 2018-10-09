import React from "react";
import PropTypes from 'prop-types'

export default class TodoListItem extends React.Component {

  static propTypes = {
    item: PropTypes.object,
    removeItem: PropTypes.func,
    markTodoDone: PropTypes.func
  }

  onClickClose = () => {
    const {index, removeItem} = this.props;
    removeItem(index);
  };

  onClickDone = () => {
    const {index, markTodoDone} = this.props;
    markTodoDone(index);
  };

  render() {
    const {item} = this.props;
    const todoClass = item.done ? "done" : "undone";
    return (
      <tr data-testid={`todoItem${item.index}`}>
        <td className={todoClass}>
          <span data-testid="markAsCompleted" className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}/>
            {item.value}
          <span data-testid="markAsDeleted"className="glyphicon glyphicon-remove-sign close" aria-hidden="true" onClick={this.onClickClose}/>
        </td>
      </tr>
    );
  }
}
