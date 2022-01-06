import {Link} from "react-router-dom";
import "./Nav.css";

export default function Nav(){
    return (
        <nav className="nav-bar">
        <Link className="nav-link" to="/">Users list</Link>
        <Link className="nav-link" to="/add-user">Add a new user</Link>
      </nav>
    )

}