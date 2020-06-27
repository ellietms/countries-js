import React from 'react';



const CountryInfo = ({selectedCountryInfo,BordersOFselectedCountry}) => {
 return(
     <div>
        <img src={selectedCountryInfo.flag}
        alt="countryFlag"
         style={{width:"100px"}}/> 
         <div>
        {selectedCountryInfo.name},
        {selectedCountryInfo.nativeName},
        {selectedCountryInfo.population},
        {selectedCountryInfo.region},
        {selectedCountryInfo.subregion},
        {selectedCountryInfo.capital},
        {selectedCountryInfo.topLevelDomain[0]},
        {selectedCountryInfo.currencies.map((currency) => currency.code)},
        {selectedCountryInfo.languages.map((language) => language.name)},
        </div>
        <div>
            Borders:
           { BordersOFselectedCountry.map(eachBorder => {
            return( 
            <div>  
            <button >
                {eachBorder.name}
            </button>
            </div>
            )
            })}
           
        </div>
     </div>
 )

}



export default CountryInfo;