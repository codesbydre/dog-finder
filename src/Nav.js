import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand bg-light">
      <a className="navbar-brand" href="/dogs">
        Dog App
      </a>
      <ul className="navbar-nav mr-auto">
        {props.dogs.map((d) => (
          <li className="nav-item" key={d.name}>
            <Link className="nav-link" to={`/dogs/${d.name.toLowerCase()}`}>
              {d.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
