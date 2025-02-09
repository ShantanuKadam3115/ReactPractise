import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { test, expect, describe, it } from 'vitest'; // Import Vitest utilities
import App from './App';

 describe('UI render', () => {
    it("should display Password Generator Heading", function () {
        render(<App />);
        const h1Element = screen.getByText(/Password Generator/);
        expect(h1Element).toBeInTheDocument();
    });

    test("for the title of the page to be correct",  () => {
        render(<App/>); 
        expect(document.title).toBe('PassGen');
      });

    it('should have an input field for password', () => {
        render(<App />);
        const passwordInput = screen.getByPlaceholderText('password');
        expect(passwordInput).toBeInTheDocument();
    });

    it('should have a copy button', () => {
        render(<App />);
        const copyButton = screen.getByText('Copy');
        expect(copyButton).toBeInTheDocument();
    });

    it('should have a range button for length', () => {
        render(<App />);
        const rangeButton = screen.getByLabelText(/Length:/);
        expect(rangeButton).toBeInTheDocument();
    });

    it('should have a checkbox for numbers', () => {
        render(<App />);
        const numbersButton = screen.getByLabelText('Numbers');
        expect(numbersButton).toBeInTheDocument();
    });

    it('should have a checkbox for characters', () => {
        render(<App />);
        const charButtob = screen.getByLabelText('Characters');
        expect(charButtob).toBeInTheDocument();
    });

    it('should have a password field that is not empty', () => {
        render(<App />);
        const pass = screen.getByTestId('password');
        expect(pass).not.toBeNull();
    });

    it('should have the range input set with a default value of 8', () => {
        render(<App />);
        const range = screen.getByLabelText(/Length:/);
        expect(range).toHaveValue("8");
    });
});

describe('password generation', () => {

    test("should generate a password with numbers", async () => {
        render(<App />);
        const numbersCheckbox = screen.getByLabelText(/Numbers/i);
        fireEvent.click(numbersCheckbox);
      
        await waitFor(() => {
          const passwordElement = screen.getByTestId("password");
          const password =  passwordElement.value; 
          expect(password).toMatch(/[0-9]/);
        });
      });

    
    it('should generate a password with characters', async () => {
        render(<App />);
        
        const charactersCheckbox = screen.getByLabelText('Characters');
        fireEvent.click(charactersCheckbox);
        await waitFor(() => {
            const passwordElement = screen.getByTestId("password");
            const password =  passwordElement.value; 
            expect(password).toMatch(/[!@#$%^&*~<>+]/);
          });
    });

    it('should generate a password with numbers and characters', async () => {
        render(<App />);
        
        const numbersCheckbox = screen.getByLabelText(/Numbers/i);
        fireEvent.click(numbersCheckbox);
        const charactersCheckbox = screen.getByLabelText('Characters');
        fireEvent.click(charactersCheckbox);
        await waitFor(() => {
            const passwordElement = screen.getByTestId("password");
            const password = passwordElement.textContent || passwordElement.value; 
            expect(password).toMatch(/[0-9!@#$%^&*~<>+]/);
          });
    });

    it('should generate a password with the selected length', async () => {
        render(<App />);
        const range = screen.getByLabelText(/Length:/);
        fireEvent.change(range, { target: { value: 12 } });
        await waitFor(() => {
            const passwordElement = screen.getByTestId("password");
            const password =  passwordElement.value; 
            expect(password).toHaveLength(12);
          });
    });
});

// describe('copy to clipbaoard functionality', () => {
    
// })

    