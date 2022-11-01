import React, {useState} from 'react';
import './App.css';
import Field from "./components/Field/Field";
import TryCounter from "./components/TryCounter/TryCounter";
import ResetButton from "./components/ResetButton/ResetButton";

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
  const [gameFinished, setGameFinished] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleCellClick = (id: string) => {
    if (gameFinished) return;
    const i = cells.findIndex(cell => cell.id === id);
    const itemCopy = {...cells[i]};
    if (itemCopy.clicked) return;
    const cellsCopy = [...cells];
    itemCopy.clicked = true;
    cellsCopy[i] = itemCopy;
    setCounter(counter + 1);
    if (itemCopy.hasItem) setGameFinished(true);
    setCells(cellsCopy);
  };

  const resetGame = () => {
    console.log('Reset game')
    setCells(getModel());
    setCounter(0);
    setGameFinished(false);
  };

  return (
    <div className="App">
      <Field cells={cells} onCellClick={handleCellClick}/>
      <div>
        <TryCounter counter={counter} />
        <ResetButton onReset={resetGame} />
      </div>
    </div>
  );
}

export default App;
