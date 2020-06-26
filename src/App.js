import React,{useState} from 'react';
import './App.css';
import Data from './data.json';
import Search from './Search';
import DropDown from './DropDown';
import Countries from './Countries';

function App() {
  const [inputvalue,setInputValue]=useState("");
  const[countryRegion,setCountryRegion]=useState(null)


  const filteredCountries = Data.filter((eachCountry) => 
   eachCountry.region === countryRegion || 
    countryRegion === null)
  .filter((eachCountry) => 
    inputvalue === "" ? true :
    eachCountry.name.toLowerCase().includes(inputvalue) || 
    eachCountry.capital.toLowerCase().includes(inputvalue)
  )

  let mainContent;
  mainContent=(
  <div>
    <Search
     inputValueOfSearch={(event) =>setInputValue(event.target.value)}/>
    <DropDown
    showSpecificRegion={(region) => setCountryRegion(region)}/>
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
