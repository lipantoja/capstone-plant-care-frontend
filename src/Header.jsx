import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/logout">Logout</Link> | <Link to="/schedules">My Plants</Link>
      </nav>
    </header>
  )
}

