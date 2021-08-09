import './searchresults.css';
import { Link } from 'react-router-dom';
import lens from '../../assets/img/lens.png';

function Search() {
    return (
    <section className="home-search">
        <h3>Registro de la población privada de la libertad</h3>
            <div className="input-container">
                <input placeholder={localStorage.getItem('userSearch')} id="search-input" />
                <Link to ="/"><button type="button"><img src={lens} alt="Buscar" /></button></Link>
            </div>
    </section>
    );
}

export default Search;