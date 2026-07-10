import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-container">
        <span className="not-found-code">404</span>

        <h1>Page not found</h1>

        <p>
          The page you are looking for may have been removed, renamed, or does
          not exist.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <FaHome />
            Back to Home
          </Link>

          <button
            type="button"
            className="btn btn-outline"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft />
            Previous Page
          </button>
        </div>
      </div>
    </main>
  );
}

export default NotFound;