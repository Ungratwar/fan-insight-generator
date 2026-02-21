import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">
          🏏 <span>Fan Insight Generator</span>
        </h2>

        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Analyze
          </Link>

          <Link
            to="/history"
            className={`nav-link ${
              location.pathname === "/history" ? "active" : ""
            }`}
          >
            History
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;