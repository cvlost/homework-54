import React, {useState} from 'react';
import './App.css';
import Field from "./components/Field/Field";

function App() {
  const getModel = () => {
    let id = 0;
    const size = 36;
    const arr = [];
    for (let i = 0; i < 36; i ++) arr.push({hasItem: false, clicked: false, id: (id++).toString()});
    const rand = Math.floor(Math.random() * size);
    arr[rand].hasItem = true;
    return arr;
  };

  const [cells, setCells] = useState<CellData[]>(getModel());

  const handleCellClick = (id: string) => {
    const i = cells.findIndex(cell => cell.id === id);
    const cellsCopy = [...cells];
    const itemCopy = {...cells[i]};
    itemCopy.clicked = true;
    cellsCopy[i] = itemCopy;
    setCells(cellsCopy);
  };

  return (
    <div className="App">
      <Field cells={cells} onCellClick={handleCellClick}/>
    </div>
  );
}

export default App;
