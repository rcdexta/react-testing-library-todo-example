import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import TodoForm from '../TodoForm'

test('TodoForm should add new item and call onAddItem callback prop', () => {
  const addItem = jest.fn()
  const {getByTestId} = render(<TodoForm onAddItem={addItem}/>)

  let newItem = 'Get Milk'
  fireEvent.change(getByTestId('newItemField'), {target: {value: newItem}})
  getByTestId('addBtn').click()

  expect(addItem).toBeCalledWith({newItemValue: newItem})
  expect(addItem).toHaveBeenCalledTimes(1);
})
