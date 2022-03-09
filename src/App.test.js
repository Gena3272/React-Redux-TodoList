import { render, screen } from '@testing-library/react';
import App from './App';

describe('App renders', () => {
    test('renders title', () => {
        render(<App />);
        const linkElement = screen.getByText(/TodoList/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('renders input', () => {
        render(<App />);
        const linkElement = screen.getByPlaceholderText(/What needs to be done/i);
        expect(linkElement).toBeInTheDocument();
    });
})


