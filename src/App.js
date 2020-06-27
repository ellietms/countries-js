import React,{useState} from 'react';
import './App.css';
import Data from './data.json';
import Search from './Search';
import DropDown from './DropDown';
import Countries from './Countries';
import CountryInfo from './CountryInfo';

function App() {

  const[inputValue,setInputValue]=useState("");
  const[countryRegion,setCountryRegion]=useState(null);
  const[selectedCountryData,setSelectedCountryData]=useState(null);
  

  const filteredCountries = Data.filter((eachCountry) => 
   eachCountry.region === countryRegion || 
    countryRegion === null)
  .filter((eachCountry) => 
    inputValue === "" ? true :
    eachCountry.name.toLowerCase().includes(inputValue) || 
    eachCountry.capital.toLowerCase().includes(inputValue)
  )

  let BordersOFSelectedCountryData,mainContent;

  if(selectedCountryData === null){
  mainContent=(
  <div>
    <Search
     inputValueOfSearch={(event) =>setInputValue(event.target.value)}/>
    <DropDown
    showSpecificRegion={(region) => setCountryRegion(region)}/>
     <Countries
      allData={filteredCountries}
      selectedCountryData={(eachCountry) => setSelectedCountryData(eachCountry)}/>
  </div>
  )}

  else{

    BordersOFSelectedCountryData = Data.filter((country) =>  
    selectedCountryData.borders.includes(country.alpha3Code))
    console.log(BordersOFSelectedCountryData)
   
    mainContent=(
    <CountryInfo 
    selectedCountryData ={selectedCountryData}
    BordersOFSelectedCountryData={BordersOFSelectedCountryData}
    selectedBorder ={(eachCountry) => setSelectedCountryData(eachCountry)}
    backToMAinPage={(eachCountry) => setSelectedCountryData(null)}/>
    )
  }

  return (
     <div>
       {mainContent}
     </div>
  );
}

export default App;
