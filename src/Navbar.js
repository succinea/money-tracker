import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, callback }) => {
  return (
    <nav className="navbar">
      <h1>Money Tracker</h1>
      <div className="links">
        {isAuthenticated ? (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
          </>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            callback();
          }}
        >
          {isAuthenticated ? "Log Out" : "Log In"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
