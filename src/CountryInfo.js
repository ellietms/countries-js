import React from "react";

const CountryInfo = ({
  selectCountryData,
  BordersOFSelectCountryData,
  selectBorder,
  backToMAinPage,
}) => {
  return (
    <div>
      <div>
        <button onClick={() => backToMAinPage()}>backToMAinPage</button>
      </div>
      <img
        src={selectCountryData.flag}
        alt="countryFlag"
        style={{ width: "100px" }}
      />
      <div>
        {selectCountryData.name},{selectCountryData.nativeName},
        {selectCountryData.population},{selectCountryData.region},
        {selectCountryData.subregion},{selectCountryData.capital},
        {selectCountryData.topLevelDomain[0]},
        {selectCountryData.currencies.map((currency) => currency.code)},
        {selectCountryData.languages.map((language) => language.name)},
      </div>
      <div>
        Borders:
        {BordersOFSelectCountryData.map((country) => {
          return (
            <div>
              <button onClick={() => selectBorder(country)}>
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
