import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./Header";

describe('Header Component', () => {
    it('should render header component with props', () => {
        render(<Header title={'TodoList'}/>);
        expect(screen.getByTestId('header')).toHaveTextContent('TodoList');
    })
})
