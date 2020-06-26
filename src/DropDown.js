import React from 'react';


const DropDown = ({showSpecificRegion}) => {
    return(
    <div>
    <div name="continent" id="continent">
    <button 
    value="All Region"
    onClick={() => showSpecificRegion(null)}>
        All Region
    </button>
    <button
     value="Africa"
    onClick={() => showSpecificRegion("Africa")}>
        Africa
    </button>
    <button value="America"
    onClick={() => showSpecificRegion("Americas")}>
        America
    </button>
    <button value="Asia"
    onClick={() => showSpecificRegion("Asia")}>
        Asia
    </button>
    <button value="Europe"
    onClick={() => showSpecificRegion("Europe")}>
        Europe
    </button>
    <button value="Oceania"
    onClick={() => showSpecificRegion("Oceania")}>
        Oceania
    </button>
    </div>
    </div>
    )
}



export default DropDown;