import React from 'react';


const Search = ({handleSearchValue,value}) => {
return(
    <div>
    <input type="text" placeholder="Search.."
    value={value}
    onChange={(event) => handleSearchValue(event)}/>
    </div>
)
} 



export default Search;