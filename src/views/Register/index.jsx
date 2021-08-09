import './register.scss';
import { ContainerLogo } from '../../components/ContainerLogo';
import { RegisterForm } from '../../components/RegisterForm';


export const Register = () => {
    return(
        <div className="background-image">
            <ContainerLogo />
            <RegisterForm />
        </div>
    )
};