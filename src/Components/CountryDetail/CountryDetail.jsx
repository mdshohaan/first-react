import CountryData from "./CountryData";

const CountryDetail = (props) => {
  //   const { country, handleVisitedCountry, handleVisitedFlags } = props;
  return (
    <div>
      <h4>Country Detail</h4>
      {/* // country={country}
        // handleVisitedCountry={handleVisitedCountry}
        // handleVisitedFlags={handleVisitedFlags} */}

      <CountryData {...props}></CountryData>
    </div>
  );
};
export default CountryDetail;
