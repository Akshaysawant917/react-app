export const Footers = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} My Awesome React App. All rights reserved.
        </p>
        <div className="mt-4 sm:mt-0 space-x-4 text-sm">
          <a href="/about" className="hover:underline text-gray-400 hover:text-white">About</a>
          <a href="/contact" className="hover:underline text-gray-400 hover:text-white">Contact</a>
          <a href="#" className="hover:underline text-gray-400 hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
