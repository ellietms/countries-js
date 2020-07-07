import React, { useState } from "react";
import Data from "./data.json";
import Search from "./Search";
import DropDown from "./DropDown";
import Countries from "./Countries";
import CountryInfo from "./CountryInfo";

function App() {
  const [searchValue,setSearchValue] = useState("");
  const [countryRegion,setCountryRegion] = useState("");
  const [selectCountryData,setSelectCountryData] = useState(null);
  const filteredCountries = Data.filter(
    (country) => country.region === countryRegion || countryRegion === "")
    .filter(
    (country) =>
      searchValue === "" ||
      country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchValue.toLowerCase())
  );

  let mainContent;

  if (selectCountryData === null) {
    mainContent = (
      <div>
        <Search
          value={searchValue}
          // Here
          handleSearchValue={(newSearchValue) => setSearchValue(newSearchValue)}
          // Here
        />
        <DropDown showSpecificRegion={(region) => setCountryRegion(region)} />
        <Countries
          allData={filteredCountries}
          // Here
          selectCountryData={function(country){ setSelectCountryData(country) }} 
          // Here
        />
      </div>
    );
  } else {
    let BordersOfSelectCountryData;
    BordersOfSelectCountryData = Data.filter((country) =>
      selectCountryData.borders.includes(country.alpha3Code)
    );

    mainContent = (
      <CountryInfo
        selectCountryData={selectCountryData}
        BordersOfSelectCountryData={BordersOfSelectCountryData}
        selectBorder={(eachCountry) => setSelectCountryData(eachCountry)}
        backToMAinPage={() => setSelectCountryData(null)}
      />
    );
  }

  return <div>{mainContent}</div>;
}

export default App;
