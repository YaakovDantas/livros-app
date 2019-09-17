import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../utils/userAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import 'materialize-css/dist/css/materialize.min.css';

const Header = (props) => {
    const logoutRedirect = (props)=>{
        props.logoutUser()
       
    }
    const logado = () => {
        if (props.user.data) {
            return <li><NavLink  to="/login" onClick={()=>{logoutRedirect(props)}}>Logout</NavLink></li>
            
        } else {
            return <li><NavLink to="/login">Login</NavLink></li>
        }
    }
    return (

        <nav>
            <div className="nav-wrapper indigo darken-2">
                <NavLink to="/" className="brand-logo ml-3">Livros-app</NavLink>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/authors">Autores</NavLink></li>
                    {/* activeStyle={{ color: "red" }} */}
                    <li><NavLink to="/books">Livros</NavLink></li>
                    <li><NavLink to="/about">Sobre</NavLink></li>

                    {logado()}
                </ul>
            </div>
        </nav>
    );
}

function mapStateToProps(state) {

    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
