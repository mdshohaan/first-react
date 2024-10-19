import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry,handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  // const passWithParams = () => handleVisitedCountry(country);

  console.log(handleVisitedCountry);

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>{name?.common}</h3>
      <img src={flags?.png} alt="" />
      <p>{population}</p>
      <p>{area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
<br />
<button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;
