import {render, screen} from "@testing-library/react";
import EmptyMassage from "./EmptyMessage";

describe('Todo message renders', () => {
    it('empty message', () => {
        render(<EmptyMassage message={'Add your first To Do!'}/>);
        expect(screen.getByTestId('empty-message')).toHaveTextContent('Add your first To Do!');
    })
})
