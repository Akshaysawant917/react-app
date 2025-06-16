import { useParams } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
import { getCountryByName } from "../api/postApi";

export const CountryDetail = () => {
    const [isPending, startTransition] = useTransition();
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryByName(name)
            setCountry(res.data[0]);
        });
    }, [name]);


    if (isPending) return <h2 className="text-center mt-10 text-xl">Loading...</h2>;
    if (!country) return <h2 className="text-center mt-10 text-red-500">Country not found.</h2>;

    return (
        <section className="max-w-4xl mx-auto py-12 px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <img
                    src={country.flags.svg}
                    alt={country.flags.alt}
                    className="w-48 h-32 object-cover mb-6"
                />
                <h1 className="text-3xl font-bold mb-2">{country.name.official}</h1>
                <p><strong>Common Name:</strong> {country.name.common}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Capital:</strong> {country.capital?.[0]}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Area:</strong> {country.area} km²</p>
                <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
            </div>
        </section>
    );
};

export default CountryDetail;
