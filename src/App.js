import React,{useState} from 'react';
import './App.css';
import Data from './data.json';
import Search from './Search';
import DropDown from './DropDown';
import Countries from './Countries';
import CountryInfo from './CountryInfo';

function App() {

  const[searchValue,setSearchValue]=useState("");
  const[countryRegion,setCountryRegion]=useState(null);
  const[selectedCountryData,setSelectedCountryData]=useState(null);
  

  const filteredCountries = Data.filter((country) => 
   country.region === countryRegion || 
   countryRegion === null)
  .filter((country) => 
    searchValue === "" ||
    country.name.toLowerCase().includes(searchValue) || 
    country.capital.toLowerCase().includes(searchValue)
  )

  let mainContent;

  if(selectedCountryData === null){
  mainContent=(
  <div>
    <Search
     searchValueOfSearch={(event) =>setSearchValue(event.target.value)}/>
    <DropDown
    showSpecificRegion={(region) => setCountryRegion(region)}/>
     <Countries
      allData={filteredCountries}
      selectedCountryData={(country) => setSelectedCountryData(country)}/>
  </div>
  )
}

  else{
    let BordersOFSelectedCountryData;
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
