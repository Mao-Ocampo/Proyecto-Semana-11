import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './loginform.scss';
import { Link } from 'react-router-dom';
import { ContainerLogo } from '../../components/ContainerLogo';


export const LoginForm = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'MAURICIO'
            }
        });

        history.replace( lastPath );
        
    }
    
    return(
    <div className="background-image">
        <ContainerLogo />
        <form className="login-container">
            <div className="login-form">
                <h4>Formulario de Ingreso</h4>
                <input type="email" name="user" id="user" placeholder="E-mail" required/><span className="bar"></span>
                <input type="password" name="password" id="password" placeholder="Contraseña" required/><span className="bar"></span>
                <button type="submit" onClick={ handleLogin }>Ingresar</button>
                <p>¿Olvidaste tu contraseña?</p>
                <p>¿No tienes una cuenta? <Link className="register-link" to="/register">Regístrate</Link></p>
            </div>
        </form>
    </div>
    )
};