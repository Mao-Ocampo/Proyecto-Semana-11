import './navbar.scss';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import logo from '../../assets/img/logo.png';
import user from '../../assets/img/user.png';

export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });
    }

    return(
    <nav className="navbar-container">
        <div className="navbar-logo">
            <Link to="/home"><img src={ logo } alt="Logo" /></Link>
            <Link className="h1-link" to="/home"><h1>FBI</h1></Link>
        </div>
        <div className="navbar-links">
            <Link className="links" to="/aboutus">ACERCA DEL FBI</Link>
            <Link className="links" to="/complaint">DENUNCIAR</Link>
            <Link className="links" onClick={ handleLogout }>{ name }</Link>
            <div className="navbar-user-img">
                <img src={ user } alt="user" />
            </div>   
        </div>
    </nav>
    )
};