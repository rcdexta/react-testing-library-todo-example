import React from 'react'
import PropTypes from 'prop-types'

export default class TodoForm extends React.Component {

  static propTypes = {
    onAddItem: PropTypes.func
  }

  state = {value: ''}

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  addItem = () => {
    const {value} = this.state
    if (value && value !== '') {
      this.props.onAddItem({newItemValue: value});
      this.setState({value: ''})
    }
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <input type="text" value={this.state.value} data-testid="newItemField"
               className="form-control" placeholder="add a new item..." onChange={this.handleChange}/>
        <button className="pure-button pure-button-primary" data-testid="addBtn" onClick={this.addItem}>Add</button>
      </div>
    );
  }
}
