import './Practice1.css';
import { Provider } from 'react-redux'
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';
import store from './store';

export interface StateType {
  counter : {
    number : number,
    inputValue : number
  }
}

const Counter = () => {

  return (
    <Provider store={store}>
        <h1>Root</h1>
        <AddNumberRoot />
        <DisplayNumberRoot />
    </Provider>
  );
}

export default Counter;
