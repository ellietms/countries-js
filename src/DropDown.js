import React from "react";

const DropDown = ({showSpecificRegion}) => {
  return (
    <div name="continent" id="continent">
      <select onChange={(event) => showSpecificRegion(event.target.value)}>
        {/* fix this  value for all region */}
        <option value=""> All Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default DropDown;
