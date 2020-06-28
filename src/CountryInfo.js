import React from 'react';



const CountryInfo = ({selectedCountryData,BordersOFSelectedCountryData,selectedBorder,backToMAinPage}) => {
 return(
     <div>
         <div>
             <button onClick={() => backToMAinPage()}>
                 backToMAinPage
             </button>    
         </div>
        <img src={selectedCountryData.flag}
        alt="countryFlag" { /* Alt text should be words, phrases, or sentences. countryFlag isn't somethin screen readers will necessarily know how to read - can you think of a more descriptive one? */}
         style={{width:"100px"}}/> 
         <div>
        {selectedCountryData.name},
        {selectedCountryData.nativeName},
        {selectedCountryData.population},
        {selectedCountryData.region},
        {selectedCountryData.subregion},
        {selectedCountryData.capital},
        {selectedCountryData.topLevelDomain[0]},
        {selectedCountryData.currencies.map((currency) => currency.code)},
        {selectedCountryData.languages.map((language) => language.name)},
        </div>
        <div>
            Borders:
           { BordersOFSelectedCountryData.map(country => {
            return( 
            <div>  
            <button onClick={() => selectedBorder(country)}>
                {country.name}
            </button>
            </div>
            )
            })}
           
        </div>
     </div>
 )

}



export default CountryInfo;