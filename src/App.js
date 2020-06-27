import React,{useState} from 'react';
import './App.css';
import Data from './data.json';
import Search from './Search';
import DropDown from './DropDown';
import Countries from './Countries';
import CountryInfo from './CountryInfo';

function App() {
  const[inputvalue,setInputValue]=useState("");
  const[countryRegion,setCountryRegion]=useState(null);
  const[selectedCountry,setSelectedCountry]=useState(null);
  

  const filteredCountries = Data.filter((eachCountry) => 
   eachCountry.region === countryRegion || 
    countryRegion === null)
  .filter((eachCountry) => 
    inputvalue === "" ? true :
    eachCountry.name.toLowerCase().includes(inputvalue) || 
    eachCountry.capital.toLowerCase().includes(inputvalue)
  )
  let BordersOFselectedCountry;
  let mainContent;
  if(selectedCountry === null){
  mainContent=(
  <div>
    <Search
     inputValueOfSearch={(event) =>setInputValue(event.target.value)}/>
    <DropDown
    showSpecificRegion={(region) => setCountryRegion(region)}/>
     <Countries
      allData={filteredCountries}
      selectedCountry={(eachCountry) => setSelectedCountry(eachCountry)}/>
  </div>
  )}
  else{
    BordersOFselectedCountry = Data.filter((country) =>  
    selectedCountry.borders.includes(country.alpha3Code))
    console.log(BordersOFselectedCountry)
   
    mainContent=(
    <CountryInfo 
    selectedCountryInfo ={selectedCountry}
    BordersOFselectedCountry={BordersOFselectedCountry}/>
    )

  }

  return (
     <div>
       {mainContent}
     </div>
  );
}

export default App;
