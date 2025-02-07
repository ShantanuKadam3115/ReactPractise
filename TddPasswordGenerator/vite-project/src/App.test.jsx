import { render, screen } from '@testing-library/react';
import { test, expect, describe, it } from 'vitest'; // Import Vitest utilities
import App from './App';

describe('first render', ()=>{
    it("should display Hello world", function () {
            render(<App />);
            const h1Element = screen.getByText(/Hello World/i);
            expect(h1Element).toBeInTheDocument();
        })
})