import React from 'react';


const DropDown = ({showSpecificRegion}) => {
    return(
    <div>
    <select name="continent" id="continent">
    <option value="All Region">Filtered by Region</option> 
    <option 
    value="All Region"
    onClick={() => showSpecificRegion("")}>
        All Region
    </option>
    <option value="Africa"
    onClick={() => showSpecificRegion("Africa")}>
        Africa
    </option>
    <option value="America"
    onClick={() => showSpecificRegion("Americas")}>
        America
    </option>
    <option value="Asia"
    onClick={() => showSpecificRegion("Asia")}>
        Asia
    </option>
    <option value="Europe"
    onClick={() => showSpecificRegion("Europe")}>
        Europe
    </option>
    <option value="Oceania"
    onClick={() => showSpecificRegion("Oceania")}>
        Oceania
    </option>
    </select>
    </div>
    )
}



export default DropDown;