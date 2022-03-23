import '../assets/styles/nav.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="d-flex">
    <h1>Math Magicians</h1>
    <ul className="d-flex">
      <li className="d-flex">
        <Link to="/">Home</Link>
      </li>
      <li className="d-flex">
        <Link to="calculator">Calculator</Link>
      </li>
      <li className="d-flex">
        <Link to="quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
