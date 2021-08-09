import './footer.scss';
import facebook from '../../assets/img/social1.png';
import instagram from '../../assets/img/social2.png';
import twitter from '../../assets/img/social3.png';
import youtube from '../../assets/img/social4.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
    <footer>
        <div className="footer-container">
            <div>
                <div className="footer-item">
                    <Link className="link-footer" to="/aboutus">Sobre Nosotros</Link>
                    <Link className="link-footer">Terminos y condiciones</Link>
                    <Link className="link-footer">FBI.gov Contact Center</Link>
                    <Link className="link-footer">FAQs</Link>
                </div>
            </div>
            <div>
                <Link><img src={ facebook } alt="Facebook" /></Link>
                <Link><img src={ instagram } alt="Facebook" /></Link>
                <Link><img src={ twitter } alt="Facebook" /></Link>
                <Link><img src={ youtube } alt="Facebook" /></Link>
            </div>
        </div>
    </footer>
    )
};