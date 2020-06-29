import React, { useState } from 'react';


const DropDown = ({showSpecificRegion}) => {

    const [region,setRegion]=useState(null)
    return(
    <div name="continent" id="continent">
    <select onClick={() => showSpecificRegion(region)}>  
    <option 
    value="All Region"
    onClick={() => setRegion(null)}>
        All Region
    </option>
    <option
     value="Africa"
    onClick={() => setRegion("Africa")}>
        Africa
    </option>
    <option value="America"
    onClick={() => setRegion("Americas")}>
        America
    </option>
    <option value="Asia"
    onClick={() => setRegion("Asia")}>
        Asia
    </option>
    <option value="Europe"
    onClick={() => setRegion("Europe")}>
        Europe
    </option>
    <option value="Oceania"
    onClick={() => setRegion("Oceania")}>
        Oceania
    </option>
    </select>
    </div>
    )
}



export default DropDown;