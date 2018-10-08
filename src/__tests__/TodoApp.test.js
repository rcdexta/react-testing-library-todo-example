import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {cleanup, fireEvent, render, within} from 'react-testing-library'
import TodoApp from '../TodoApp'

const todoItems = [];
todoItems.push({index: 1, value: "Buy Milk", done: false});
todoItems.push({index: 2, value: "Call Dad", done: false});
todoItems.push({index: 3, value: "Fill Gas", done: false});

afterEach(cleanup)

test('TodoApp should list the items in the passed order', () => {
  const {container} = render(<TodoApp items={Array.from(todoItems)}/>)

  const items = container.querySelectorAll('tr')
  expect(items).toHaveLength(3)

  expect(items[0].textContent).toBe(todoItems[0].value)
  expect(items[1].textContent).toBe(todoItems[1].value)
  expect(items[2].textContent).toBe(todoItems[2].value)
})

test('TodoApp should add new item to the bottom of the todolist', () => {
  const {container, getByTestId} = render(<TodoApp items={Array.from(todoItems)}/>)

  let newItem = 'New Task'
  fireEvent.change(getByTestId('newItemField'), {target: {value: newItem}})
  getByTestId('addBtn').click()

  const items = container.querySelectorAll('tr')
  expect(items).toHaveLength(4)
  expect(items[3].textContent).toBe(newItem)
})

test('TodoApp should remove item if deleted', () => {
  const {container, getByTestId} = render(<TodoApp items={Array.from(todoItems)}/>)

  const secondItemDeleteBtn = within(getByTestId('todoItem2')).getByTestId('markAsDeleted')
    fireEvent.click(secondItemDeleteBtn)

  const items = container.querySelectorAll('tr')
  expect(items).toHaveLength(2)
})
