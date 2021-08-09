import './login.scss';
import { LoginForm } from '../../components/LoginForm';
import { ContainerLogo } from '../../components/ContainerLogo';


export const Login = () => {
    return(
        <div className="background-image">
            <ContainerLogo />
            <LoginForm />
        </div>
    )
};