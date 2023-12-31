import { Link } from "react-router-dom";
import "../App.css"

export default function Header() {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          My Blog
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    </div>
  );
}
