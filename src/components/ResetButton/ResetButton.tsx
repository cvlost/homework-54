import React from 'react';
import './ResetButton.css';

interface Props {
  onReset: React.MouseEventHandler;
}

const ResetButton: React.FC<Props> = ({onReset}) => {
  return (
    <div className="ResetButton-wrapper">
      <button className="ResetButton" onClick={onReset}>Reset</button>
    </div>
  );
};

export default ResetButton;