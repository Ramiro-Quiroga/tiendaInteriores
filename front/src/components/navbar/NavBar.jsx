import { Link } from "react-router";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navegacion">
            <ul className="lista-navegacion">
                <li className="item-navegacion">
                    <Link to="/" className="enlace-navegacion">
                        Inicio
                    </Link>
                </li>
                <li className="item-navegacion">
                    <Link to="/catalogo" className="enlace-navegacion">
                        Catálogo
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;