const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(country, handleVisitedCountry, handleVisitedFlags);
  return (
    <div>
      <p>
        <small>country data:{country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
