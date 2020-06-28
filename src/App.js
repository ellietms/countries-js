import React,{useState} from 'react';
import './App.css';
import Data from './data.json';
import Search from './Search';
import DropDown from './DropDown';
import Countries from './Countries';
import CountryInfo from './CountryInfo';

function App() {

  const[inputValue,setInputValue]=useState(""); // It's not obvious from this variable's name how it will be used, can you think of a more descriptive name?
  const[countryRegion,setCountryRegion]=useState(null);
  const[selectedCountryData,setSelectedCountryData]=useState(null);
  

  const filteredCountries = Data.filter((eachCountry) => // each is a kind of unusual prefix to a variable name - why not just `country`?
   eachCountry.region === countryRegion || 
    countryRegion === null)
  .filter((eachCountry) => 
    inputValue === "" ? true : // Above you use `||` but here you use `? true :` - both are technically right, but I'd probably try to use the same one (probably the || version). When reading code, seeing two things be the same makes me not need to think about them ("Oh, they're doing the same thing"), whereas seeing things written differently makes me spend time to understand them and think about how and why they're different.
    eachCountry.name.toLowerCase().includes(inputValue) || // What happens if I type "Iran" in the search box? What _should_ happen?
    eachCountry.capital.toLowerCase().includes(inputValue)
  )

  let BordersOFSelectedCountryData,mainContent; // BordersOFSelectedCountryData is only used in one of the `if` branches, so you should only declare it in that one.

  if(selectedCountryData === null){
  mainContent=(
  <div>
    <Search
     inputValueOfSearch={(event) =>setInputValue(event.target.value)}/> { /* It's a little strange for App to know that this function will be used as an event handler, and to know the structure of events it expects. Maybe the other component has links you can click too, or something. I'd expect this prop to be a function which you call with the string being searched for, and for the Search component to translate the event into a string. */ }
    <DropDown
    showSpecificRegion={(region) => setCountryRegion(region)}/>
     <Countries
      allData={filteredCountries}
      selectedCountryData={(eachCountry) => setSelectedCountryData(eachCountry)}/> { /* Names like "selected" sound like they describe something which _already_ happened (like handling an evet which happened) - if the function actively _does_ the thing, I'd call it select* rather than selected*. But maybe I'd call this `showCountry`? */} { /* What's the reason for passing a wrapper arrow function here, rather than just passing setSelectedCountryData? */ }
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
    selectedBorder ={(eachCountry) => setSelectedCountryData(eachCountry) /* Why the wrapper arrow function? */ }
    backToMAinPage={(eachCountry) => setSelectedCountryData(null)}/ /* Why does this function take an argument it doesn't use? */ /* The casing of this prop name is unusual/surprising */>
    )
  }

  return (
     <div>
       {mainContent}
     </div>
  );
}

export default App;
