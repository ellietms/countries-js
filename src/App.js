import React,{useState} from 'react';
import './App.css';
import Data from './data.json';
import Search from './Search';
import DropDown from './DropDown';
import Countries from './Countries';

function App() {
  const [inputvalue,setInputValue]=useState("");
  const[countryRegion,setCountryRegion]=useState()

  function showSpecificRegion(countryRegion){
    Data.filter(country => country.region === countryRegion ? true : false)
  }

  // .filter(eachCountry => eachCountry.region === countryRegion ? true : false)
  
  const filteredCountries = Data.filter((eachCountry) => 
    inputvalue === "" ? true :
    eachCountry.name.toLowerCase().includes(inputvalue) || 
    eachCountry.capital.toLowerCase().includes(inputvalue)
  )

  let mainContent;
  mainContent=(
  <div>
    <Search
     inputValueOfSearch={(event) =>setInputValue(event.target.value)}/>
    {/* <DropDown
    showSpecificRegion={showSpecificRegion}/> */}
     <Countries
      allData={filteredCountries}/>
  </div>
  )

  return (
     <div>
       {mainContent}
     </div>
  );
}

export default App;
