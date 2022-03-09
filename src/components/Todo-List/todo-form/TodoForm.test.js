import {fireEvent, render} from '@testing-library/react';
import TodoForm from './TodoForm';
import items from '../../../store/reducers/items';
import {addItem} from '../../../store/actions/items';

const setup = () => {
    const utils = render(<TodoForm emptyList={!items.length} addItem={addItem}/>);
    const input = utils.getByLabelText('form-input');

    return {
        input,
        ...utils,
    };
}

describe('Todo form', () => {
    it('add text in input', () => {
        const { input } = setup();
        fireEvent.change(input, {target: {value: 'Hello world'}});
        expect(input.value).toBe('Hello world');
    })
})

