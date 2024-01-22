import { useState } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';


const App = () => {
  const [number, setNumber] = useState(0)

  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot setNumber={setNumber} />
      <DisplayNumberRoot number={number}/>
    </div>
  );
}

export default App;
