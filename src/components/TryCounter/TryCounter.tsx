import React from 'react';
import './TryCounter.css';

interface Props {
  counter: number;
}

const TryCounter: React.FC<Props> = ({counter}) => {
  return (
    <div className="TryCounter">
      Tries: <span>{counter}</span>
    </div>
  );
};

export default TryCounter;