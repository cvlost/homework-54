import React from 'react';
import './Field.css';
import Cell from "../Cell/Cell";

interface Props {
  cells: CellData[];
  onCellClick: (id: string) => void;
}

const Field: React.FC<Props> = ({cells, onCellClick}) => {
  return (
    <div className="Field">
      {cells.map(cell => (
        <Cell key={cell.id}
              clicked={cell.clicked}
              hasItem={cell.hasItem}
              onCellClick={() => onCellClick(cell.id)}
        />
      ))}
    </div>
  );
};

export default Field;