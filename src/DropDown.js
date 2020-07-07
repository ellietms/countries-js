import React from "react";

const DropDown = ({showSpecificRegion}) => {
  return (
    <div name="continent" id="continent">
      <select onChange={(event) => showSpecificRegion(event.target.value)}>
        {/* fix this  value for all region */}
        <option value=""> All Region</option>
        <option value="Africa">Africa</option> { /* If our data changes to have a new region (let's say it splits Americas into North America and South America), you would need to change this code. Can you make this dropdown in such a way that it shows regions based on what's in the data, not based on what you saw in the data? */ }
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default DropDown;
