import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/ui/CountryCard";

const ITEMS_PER_PAGE = 8;

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCountries = filteredCountries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1); 
  };

  if (isPending) return <Loader />;

  return (
    <section className="min-h-[80vh] bg-blue-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explore Countries</h2>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by country name..."
          value={searchText}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Previous
          </button>

          <span className="text-lg font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};
