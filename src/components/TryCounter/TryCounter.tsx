import React from 'react';

interface Props {
  counter: number;
}

const TryCounter: React.FC<Props> = ({counter}) => {
  return (
    <div>
      Tries: {counter}
    </div>
  );
};

export default TryCounter;