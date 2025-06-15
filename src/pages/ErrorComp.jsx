import { useRouteError } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorComp = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-300 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-red-100 text-red-600 p-4 rounded-full shadow-md">
            <FaExclamationTriangle className="h-10 w-10" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">Oops! Something went wrong.</h1>
        <p className="text-gray-600">An unexpected error occurred. Please try again later.</p>

        <div className="text-sm bg-gray-100 p-4 rounded-md text-left text-gray-700">
          <p><span className="font-semibold">Status:</span> {error?.status || "Unknown"}</p>
          <p><span className="font-semibold">Message:</span> {error?.statusText || error?.message}</p>
        </div>

        <a
          href="/"
          className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-full shadow hover:bg-red-700 transition"
        >
          ⬅️ Back to Home
        </a>
      </div>
    </div>
  );
};
