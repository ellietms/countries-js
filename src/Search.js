import React from 'react';


const Search = ({searchValueOfSearch}) => {
return(
    <div>
    <input type="text" placeholder="Search.."
    onChange={(event) => searchValueOfSearch(event.target.value.trim())}/>
    </div>
)
} 



export default Search;