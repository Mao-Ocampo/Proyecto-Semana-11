import './register.scss';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
    return(
    <form className="register-container">
        <div className="register-form">
            <h4>Formulario de Registro</h4>
            <input type="text" name="nombre" id="nombre" placeholder="Nombres" required /><span className="bar"></span>
            <input type="text" name="apell" id="apell" placeholder="Apellidos" required /><span className="bar"></span>
            <input type="email" name="email" id="email" placeholder="E-mail" required /><span className="bar"></span>
            <input type="password" name="password" id="password" placeholder="Contraseña" /><span className="bar"></span>
            <button type="submit">Regístrate</button>
            <p>¿Ya tienes una cuenta? <Link className="login-link" to="/login">Inicia Sesión</Link></p>
        </div>
    </form>
    )
};