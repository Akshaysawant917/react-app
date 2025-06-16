import { Link } from "react-router-dom";

export const Headers = () => {
  return (
    <header className="bg-white shadow-sm p-6 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
          🌐 Country Info Explorer
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
           <Link to="/country" className="text-gray-600 hover:text-blue-600 transition">Countries</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
};
