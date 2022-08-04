import React from "react";
import './style/Popup.css'
import { useSelector } from "react-redux";

const Popup = (props) => {
  const countries = useSelector((state) => state.countries)
  return props.trigger ? (
    <>
      {countries.map((country) => {
        if (props.keyId === country.id) {
          return (
            <section className={props.theme === "default" ? 'popup popup-df' : 'popup'} key={country.id}>
              <div className="container">
                <button className={props.theme === "default" ? "close-btn close-btn-df" : "close-btn"} onClick={() => props.closePopup()}>&#8592; Back</button>
                <div className={props.theme === "default" ? 'popup-card popup-card-df' : 'popup-card'} >
                  <img src={country.image} alt={country.name} />
                  <div className="popup-data-container">
                    <h2>{country.name}</h2>
                    <ul>
                      <span><li>Population: {country.population}</li>
                        <li>nativeName: {country.nativeName}</li>
                        <li>Capital: {country.capital}</li>
                        <li>Region: {country.region} </li>
                        <li>subregion: {country.subregion}</li>
                      </span>
                      <span>
                        <li>latlng: {country.latlng}</li>
                        <li>languages: {country.languages}</li>
                        <li>Top Level domain: {country.tld}</li>
                      </span>
                    </ul>
                  </div>

                </div>
              </div>
            </section>)
        }
      })
      }
    </>
  ) : '';
}
//  

export default Popup

// {countries.filter((country) => {
//   if (props.keyId === country.id) {
//     <section className="popup">
//       <div className="popup">
//         <div className="popup">
//           {country.name}
//         </div>
//       </div>
//     </section>
//   }
// })

// }