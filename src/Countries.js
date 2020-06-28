import React from 'react';




const Countries = ({allData,selectedCountryData}) => {
    return(
        allData.map((eachCountry) => { /* I would probably extract another component, called something like CountryCard, to show for each country - each country is a useful stand-alone thing to display. After that, I may not bother with this Countries component - just having allData.map(<Country country={country} />) seems fine in App.js :) */
        return(
            <div>
                <img src={eachCountry.flag}
                alt="flag"
                style={{width:"100px"}}
                onClick={() => selectedCountryData(eachCountry)}/>
                {eachCountry.name},
                {eachCountry.population.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}, { /* This regular expression is kind of hard to read. Also, in some countries it's wrong (e.g. in Germany they use .s to separate 000s not ,s). Is there a way of doing this which doesn't involve regular expressions? */}
                {eachCountry.region},
                {eachCountry.capital},
            </div>
        )
        })
    )
}




export default Countries;