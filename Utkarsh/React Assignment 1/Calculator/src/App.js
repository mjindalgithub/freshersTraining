import './App.css';
import { useState } from 'react';
import {First} from './Components/FirstComponent';
import Button from './Components/Buttons/Button1';
import Input from './Components/Buttons/Input';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <First/>
        <div className="container">
            <div className='calc'>
              
              <div className='inputs'>
                <Input/>
                <div className='nums'>
                  <Button value1 ="1" value2="2" value3="3" value4="+"/>
                  <Button value1 ="4" value2="5" value3="6" value4="-"/>
                  <Button value1 ="7" value2="8" value3="9" value4="*"/>
                  <Button value1 ="0" value2="=" value3="clr" value4="/"/>
                </div>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
