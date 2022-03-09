import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Header from '../header/Header';
import TodoFilters from '../todo-filters/TodoFilters';
import TodoForm from '../todo-form/TodoForm';
import TodoItem from '../todo-item/TodoItem';
import * as itemsActions from '../../../store/actions/items';
import { ApplicationState, Item, VisibilityFilters } from '../../../types/types';
import TodoMessage from '../todo-message/TodoMessage';

interface StateProps {
  items: Item[],
  filterState: string
}

interface DispatchProps {
  addItem(text: string): void,
  toggleItem(id: number): void,
  toggleEditItem(id: number): void,
  updateItem(id: number, text: string): void,
  removeItem(id: number): void,
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

const TodoList = ({items, addItem, toggleItem, toggleEditItem, updateItem, removeItem, filterState, loadRequest,}: Props) => {
  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  const getTaskCounter = () => (filterState === VisibilityFilters.SHOW_COMPLETED
    ? {
      counter: items.filter((item) => item.complete).length,
      text: 'completed tasks',
    } : {
      counter: items.filter((item) => !item.complete).length,
      text: 'tasks left',
    });

  return (
    <div className="todo-list">
      <Header title="TodoList" />

      <div className="content">
        <TodoForm
          emptyList={!items.length}
          addItem={addItem}
        />

        {items.length === 0
          ? (
            <TodoMessage
              filterState={filterState}
              getTaskCounter={getTaskCounter}
            />
          ) : (
            <>
              <ul className="items">
                {items.map((item) => (
                  <TodoItem
                    key={item.id}
                    item={item}
                    toggleItem={toggleItem}
                    toggleEditItem={toggleEditItem}
                    updateItem={updateItem}
                    removeItem={removeItem}
                  />
                ))}
              </ul>
              <TodoFilters taskCounter={getTaskCounter()} />
            </>
          )}
      </div>
    </div>
  );
};

const filterItems = (items: Item[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter((item) => !item.complete);
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter((item) => item.complete);
    default:
      return items;
  }
};

const mapStateToProps = ({items, filterState}: ApplicationState) => ({
  items: filterItems(items.data, filterState),
  filterState: filterState,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(itemsActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps,)(TodoList);
