import { Link } from "react-router-dom";

export const CountryCard = ({ country }) => {
  return (
    <li className="bg-white shadow rounded-lg overflow-hidden">
      <Link to={`/country/${country.name.common}`}>
        <img src={country.flags.png} alt={country.flags.alt} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{country.name.common}</h2>
          <p className="text-sm text-gray-600">Region: {country.region}</p>
          <p className="text-sm text-gray-600">Capital: {country.capital?.[0]}</p>
        </div>
      </Link>
    </li>
  );
};
