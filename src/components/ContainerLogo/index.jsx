import './containerlogo.scss';
import logo from '../../assets/img/logo.png';

export const ContainerLogo = () => {
    return(
    <div className="login-container-logo">
        <img src={logo} alt="Logo" />
        <h1>FBI</h1>
        <p>Federal Bureau of Investigation</p>
    </div>
    )
};