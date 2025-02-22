import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom';
import App from './App'

describe('App Component', () => {
  it('should add a todo item', () => {

    render(<App />)
    
    const input = screen.getByPlaceholderText('Enter todo...')
    const addButton = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'New Todo' } })
    fireEvent.click(addButton)

    expect(screen.getByText('New Todo')).toBeInTheDocument()
  })

  it('should delete a todo item', () => {

    render(<App />)
    
    const input = screen.getByPlaceholderText('Enter todo...')
    const addButton = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'Todo to be deleted' } })
    fireEvent.click(addButton)

    const deleteButton = screen.getByTestId('Delete')
    fireEvent.click(deleteButton)

    expect(screen.queryByText('Todo to be deleted')).not.toBeInTheDocument()
  })

//   it('should update a todo item', () => {
//     render(<App />)
    
//     const input = screen.getByPlaceholderText('Enter todo...')
//     const addButton = screen.getByText('Add')

//     fireEvent.change(input, { target: { value: 'Old Todo' } })
//     fireEvent.click(addButton)

//     const updateButton = screen.getByTestId('Update')
//     fireEvent.click(updateButton)

//     fireEvent.change(input, { target: { value: 'New updated todo' } })
//     fireEvent.click(addButton)

//     // Assuming update logic is implemented and changes the text to 'Updated Todo'
//     expect(screen.queryByText('New updated Todo')).toBeInTheDocument()
//   })
})