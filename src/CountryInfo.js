import React from "react";

const CountryInfo = ({
  selectedCountryData, // Rename to not be past tense
  BordersOFSelectedCountryData, // Make sure you're using capitalisation correctly in all variable names :)
  selectedBorder,  // Rename to not be past tense
  backToMAinPage,
}) => {
  return (
    <div>
      <div>
        <button onClick={() => backToMAinPage()}>backToMAinPage</button>
      </div>
      <img
        src={selectedCountryData.flag}
        alt="countryFlag"
        style={{ width: "100px" }}
      />
      <div>
        {selectedCountryData.name},{selectedCountryData.nativeName},
        {selectedCountryData.population},{selectedCountryData.region},
        {selectedCountryData.subregion},{selectedCountryData.capital},
        {selectedCountryData.topLevelDomain[0]},
        {selectedCountryData.currencies.map((currency) => currency.code)},
        {selectedCountryData.languages.map((language) => language.name)},
      </div>
      <div>
        Borders:
        {BordersOFSelectedCountryData.map((country) => {
          return (
            <div>
              <button onClick={() => selectedBorder(country)}>
                {country.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryInfo;
