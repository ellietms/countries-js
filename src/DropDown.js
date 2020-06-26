import React from 'react';


const DropDown = () => {
    return(
    <div>
    <select name="continent" id="continent">
    <option value="All Region">Filtered by Region</option> 
    <option value="All Region">All Region</option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Asia">Europe</option>
    <option value="Asia">Oceania</option>
    </select>
    </div>
    )
}



export default DropDown;