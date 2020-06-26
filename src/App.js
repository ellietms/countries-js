import React,{useState
} from 'react';
import './App.css';
import Header from './header';
import DropDown from './DropDown';
import Countries from './Countries';

function App() {
  const [value,setValue]=useState("")
  
  function inputValue(event){
  setValue(event.target.value)
  }


  return (
    <div>
      <Header
       value={value}
       setValue={inputValue}/>
      <DropDown/>
      <Countries/>
    </div>
  );
}

export default App;
