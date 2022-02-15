import React from 'react';

interface EmptyMessageProps {
  message: string,
}

const EmptyMassage = ({ message }: EmptyMessageProps) => (
  <div className="empty-list">
    <i className="fas fa-clipboard-list empty-icon" />
    <span>{message}</span>
  </div>
);

export default EmptyMassage;
