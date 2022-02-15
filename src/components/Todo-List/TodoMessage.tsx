import React from 'react';
import { VisibilityFilters } from '../../types/types';
import EmptyMessage from './EmptyMessage';
import TodoFilters from './TodoFilters';

interface MessageProps {
  filterState: string,
  getTaskCounter(): {
    counter: number,
    text: string
  }
}

const TodoMessage = ({ filterState, getTaskCounter }: MessageProps) => (
  filterState === VisibilityFilters.SHOW_COMPLETED
    ? (
      <>
        <EmptyMessage message="There are no tasks completed yet!" />
        <TodoFilters taskCounter={getTaskCounter()} />
      </>
    ) : <EmptyMessage message="Add your first To Do!" />
);

export default TodoMessage;
