import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0118] px-6">
      <div className="text-center">
        <p className="text-blue-400 font-medium mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
          Fant ikke siden
        </h1>
        <p className="text-gray-400 mb-8">
          Siden du leter etter finnes ikke, eller har blitt flyttet.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Tilbake til forsiden
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
