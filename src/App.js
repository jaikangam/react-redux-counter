import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import why from './components/why';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type: 'INC'});
  }
  const decrement = () => {
    dispatch({type:'DEC'});
  }
  const Addby = () => {
    dispatch({type:'ADD', payload:10});
  }
  return (
    <div style={{padding: "30px 30px"}}>
      <h1> Counter App with Redux Store </h1>
      <h2> {counter} </h2>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement  </button>
      <button onClick={Addby}> Add by 10  </button>
      <why />
    </div>
  );
}

export default App;
