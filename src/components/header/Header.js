import React from 'react';
import { NavLink } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo darken-2">
                <NavLink to="/" className="brand-logo ml-3">Livros-app</NavLink>
                <ul id="nav-mobile" className="right">
                    <li><NavLink  to="/authors">Autores</NavLink></li>
                    {/* activeStyle={{ color: "red" }} */}
                    <li><NavLink to="/books">Livros</NavLink></li>
                    <li><NavLink to="/about">Sobre</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;