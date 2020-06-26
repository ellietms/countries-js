import React from 'react';


const Header = ({value,setValue}) => {
return(
    <div>
        
    <input type="text" placeholder="Search.."
    onChange={() => setValue()} 
    value={value}/>

    </div>
)
} 



export default Header;