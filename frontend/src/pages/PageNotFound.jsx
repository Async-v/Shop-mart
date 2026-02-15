import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="text-center bg-white shadow-xl rounded-2xl p-10 max-w-md w-full">

                <h1 className="text-6xl font-bold text-black">404</h1>
                <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

                <p className="text-gray-600 mt-3">
                    Sorry, the page you are looking for doesn’t exist.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    <Home size={18} />
                    Go Back
                </Link>

            </div>
        </div>
    );
}

export default PageNotFound;