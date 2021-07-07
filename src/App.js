import { useContext } from "react";
import { Context } from './Context'
import ThemeSwitch from './components/ThemeSwitch'
import './App.css';


function App() {
  //deconstruct out of providerValue object in any order
  const { theme, incriment, decriment, number } = useContext(Context);

  return (
    <div className={`App ${theme}`} >
      <ThemeSwitch />
      <button onClick={incriment}>+1</button>
      <h1>{number}</h1>
      <button onClick={decriment}>-1</button>
    </div >
  );
}

export default App;