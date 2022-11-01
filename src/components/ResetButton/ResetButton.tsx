import React from 'react';

interface Props {
  onReset: () => void;
}

const ResetButton: React.FC<Props> = ({onReset}) => {
  return (
    <div className=".ResetButton-wrapper">
      <button className=".ResetButton" onClick={() => onReset()}>Reset</button>
    </div>
  );
};

export default ResetButton;