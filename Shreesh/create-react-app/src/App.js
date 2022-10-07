import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import { useState } from 'react'; 

function App() {

  const [calc, setCalc] =useState("");
  const [result, setResult] =useState("");
  const ops = ['/','*','+','-','.'];


  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) { 
      digits.push( 
        <button onclick={() => updateCalc(i.toString()
            )} key={1}>
              {i}
        </button>
      )
    }
    return digits;
  }


  const updateCalc = value => {
    setCalc(calc+value);
  }

    
  return (
    <div className="App">
      <div className="Calculator">
        <div className="Display">
          {result ? <span>(0)</span> : ''} 
          {calc || "0"} 
        </div>
        <div className="Operators">
          <Button onclick={() => updateCalc('/')} value='/'/>
          <Button onclick={() => updateCalc('*')} value='*'/>
          <Button onclick={() => updateCalc('+')} value='+'/>
          <Button onclick={() => updateCalc('-')} value='-'/>
          <Button value='DEL'/>
        
        </div>

        <div className="digits">
          { createDigits() }
          <button onclick={() => updateCalc('0')}>0</button>
          <button onclick={() => updateCalc('.')}>.</button>
          <button>=</button>
          
        </div>

      </div>
    </div>
  );
}

export default App;
