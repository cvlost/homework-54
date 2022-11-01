import React from 'react';
import './Field.css';

interface Props {
  cells: CellData[];
  onCellClick: (id: string) => void;
}

const Field: React.FC<Props> = ({cells, onCellClick}) => {
  return (
    <div className="Field">
      {cells.map(cell => {
        let item = '';
        const cellClasses = ['Field-cell'];
        if (cell.clicked) cellClasses.push('Field-cell-clicked');
        if (cell.hasItem) item = 'O';
        return (
          <div key={cell.id} className={cellClasses.join(' ')} onClick={() => {onCellClick(cell.id)}}>
            <div className="Field-cell-front">Clicked: {cell.clicked ? 'true' : 'false'}</div>
            <div className="Field-cell-back">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Field;