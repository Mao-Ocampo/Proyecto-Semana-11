import './search.css';
import { Link } from 'react-router-dom';
import lens from '../../assets/img/lens.png';

function Search() {
    return (
    <section className="home-search">
        <h3>Registro de la población privada de la libertad</h3>
            <div className="input-container">
                <input id="search-input" placeholder="Busca por apellido" id="search-input" />
                <Link to ="/results"><button type="button" onClick={localStorageActivate}><img src={lens} alt="Buscar" /></button></Link>
            </div>
    </section>
    );
}

function localStorageActivate() {
    let userSearch = document.querySelector("#search-input").value;
        localStorage.setItem('userSearch', userSearch);
    }

export default Search;