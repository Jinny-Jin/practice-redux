import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

export interface StateType {
  number : number,
  inputValue : number
}

const App = () => {

  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </div>
  );
}

export default App;
