import React from "react";

const Countries = ({ allData, selectedCountryData }) => { // I would call this selectCountry or setSelectedCountry, not selectedCountryData - the past tense makes things sound like they're handling something which already happened.
  return allData.map((eachCountry) => {
    return (
      <div>
        <img
          src={eachCountry.flag}
          alt="flag"
          style={{ width: "100px" }}
          onClick={(event) => {
            selectedCountryData(eachCountry)}}
        />
        {eachCountry.name},
        {eachCountry.population.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}, { /* This regular expression is kind of hard to read. Also, in some countries it's wrong (e.g. in Germany they use .s to separate 000s not ,s). Is there a way of doing this which doesn't involve regular expressions? */}
        {eachCountry.region},{eachCountry.capital},
      </div>
    );
  });
};

export default Countries;
