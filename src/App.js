import './App.css';
import { Counter } from "./components/Counter";
import { store } from "./Store";

function App() {

  const clickedIncrement = () => {
    store.dispatch({ type: 'increment' });
  }

  const clickedDecrement = () => {
    store.dispatch({ type: 'decrement' });
  }

  return (
    <div className="App">
      <Counter state={store.getState()} increment={clickedIncrement} decrement={clickedDecrement} />
    </div>
  );
}

export default App;
