import React from 'react';


const Search = ({handleSearchValue,value}) => {
return(
    <div>
    <input type="text" placeholder="Search.."
    value={value}
    // Here
    onChange={(event) => handleSearchValue(event.target.value)}/>
    {/* Here */}
    </div>
)
} 



export default Search;