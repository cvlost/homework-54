import React from 'react';
import './Cell.css';

interface Props {
  clicked: boolean;
  hasItem: boolean;
  onCellClick: React.MouseEventHandler;
}

const Cell: React.FC<Props> = ({hasItem, clicked, onCellClick}) => {
  let item = '';
  const cellClasses = ['Cell'];
  if (clicked) cellClasses.push('Cell-clicked');
  if (hasItem) item = '☹';

  return (
    <div className={cellClasses.join(' ')} onClick={onCellClick}>
      <div className="Cell-front"></div>
      <div className="Cell-back">{item}</div>
    </div>
  );
};

export default Cell;