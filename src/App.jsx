import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  function increaseCount(amount) {
    setCount(count + amount)
  }
  return (
    <div className="App">
      <header className="App-header"> The count is {count}
      <button onClick = {() => increaseCount(1)}> Increase Count </button>
      <button onClick = {() => increaseCount(2)}> Increase Count By Two </button>

       </header>
    </div>
  );
}

export default App;
