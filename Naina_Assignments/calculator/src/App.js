import { Component } from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';

class App extends Component {
  
  render() {
    return (
      <div className='calculator'>
        {/* heading */}
        <div className='heading'>
          <h1>My Calculator</h1>
        </div>
        {/* inputs div */}
        <div className='inputs'>
          <Input/>
          {/* numbers button */}
          <div className='nums'>
            <Button value1 ="1" value2="2" value3="3" value4="+"/>
            <Button value1 ="4" value2="5" value3="6" value4="-"/>
            <Button value1 ="7" value2="8" value3="9" value4="*"/>
            <Button value1 ="0" value2="=" value3="clr" value4="/"/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
