// src/components/Button.test.jsx
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'; // Import Vitest utilities
import Button from './Button';

test('renders button with correct text', () => {
  // Render the Button component with some text
  render(<Button>Click Me</Button>);

  // Use `screen` to query the DOM for the button element
  const buttonElement = screen.getByText(/click me/i);

  // Assert that the button is in the document
  expect(buttonElement).toBeInTheDocument();
});