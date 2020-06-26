import React from 'react';


const Search = ({inputValueOfSearch}) => {
return(
    <div>
    <input type="text" placeholder="Search.."
    onChange={(event) => inputValueOfSearch(event)} />

    </div>
)
} 



export default Search;