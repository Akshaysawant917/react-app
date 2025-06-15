import { Link } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import countries from "../api/countryDataApi.json";

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-50 min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="flex justify-center mb-4 text-blue-600 text-5xl">
            <FaGlobeAmericas />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover the World, One Country at a Time
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Instantly explore data like population, flags, capitals, languages, and more about any country using our global search.
          </p>
          <Link
            to="/country"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            🌍 Start Exploring
          </Link>
        </div>
      </section>

      {/* Country Cards Section */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Countries</h2>
          <p className="text-gray-600 text-md">
            A quick glance at some amazing countries
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{country.name}</h3>
                <p className="text-gray-600 text-sm">Capital: {country.capital}</p>
                <p className="text-gray-600 text-sm">Region: {country.region}</p>
                <p className="text-gray-600 text-sm">
                  Population: {country.population.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
