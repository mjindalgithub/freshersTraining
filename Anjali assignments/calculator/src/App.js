
import React from 'react';
import './App.css';

import Button from './Components/Button';
import Input from './Components/Input';

class App extends React.Component{
  render(){
    return (
      <div className='calapp'>
        <div className='calc'>
          <div className='display'>
            <Input/>
          </div>
        
         
        <div className='operators'>
         <Button value1="+" value2="-" value3="*" value4="/" value5="CLR" />                 
        
        </div>
        <div className='digits'>
        <Button value1="7" value2="8" value3="9"/>
        <Button value1="4" value2="5" value3="6"/>
        <Button value1="1" value2="2" value3="3"/>
        <Button value1="0" value2="." value3="="/>  
        </div>
           
      </div>
      </div>

     
    );
  }
}

export default App;
