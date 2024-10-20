import { useState } from "react";
import CountryDetail from "../CountryDetail/CountryDetail";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  // const passWithParams =()=>{
  //   handleVisitedCountry(country)
  // }
  console.log(handleVisitedCountry);
  console.log(handleVisitedFlags);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "blue" : "red" }}>Name:{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>
      {visited ? "I have visited" : "I wanna Visit"}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
