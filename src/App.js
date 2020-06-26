import React,{useState} from 'react';
import './App.css';
import Data from './data.json';
import Header from './header';
import DropDown from './DropDown';
import Countries from './Countries';

function App() {
  const [value,setValue]=useState("")


  function inputValue(event){
  setValue(event.target.value)
  }

  function showSpecificRegion(countryRegion){
    Data.filter(country => country.region === countryRegion ? true : false)
  }

  return (
    <div>
      <Header
       value={value}
       setValue={inputValue}/>
      <DropDown
      showSpecificRegion={showSpecificRegion}/>
      <Countries/>
    </div>
  );
}

export default App;
