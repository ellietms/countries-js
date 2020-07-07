import React, { useState } from "react";
import Data from "./data.json";
import Search from "./Search";
import DropDown from "./DropDown";
import Countries from "./Countries";
import CountryInfo from "./CountryInfo";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [selectedCountryData, setSelectedCountryData] = useState(null);
  const filteredCountries = Data.filter(
    (country) => country.region === countryRegion || countryRegion === "")
    .filter(
    (country) =>
      searchValue === "" ||
      country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchValue.toLowerCase())
  );

  let mainContent;

  if (selectedCountryData === null) {
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
          selectedCountryData={function(country){ setSelectedCountryData(country) }} 
          // Here
        />
      </div>
    );
  } else {
    let BordersOFSelectedCountryData;
    BordersOFSelectedCountryData = Data.filter((country) =>
      selectedCountryData.borders.includes(country.alpha3Code)
    );

    mainContent = (
      <CountryInfo
        selectedCountryData={selectedCountryData}
        BordersOFSelectedCountryData={BordersOFSelectedCountryData}
        selectedBorder={(eachCountry) => setSelectedCountryData(eachCountry)}
        backToMAinPage={() => setSelectedCountryData(null)}
      />
    );
  }

  return <div>{mainContent}</div>;
}

export default App;
