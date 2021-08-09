import './complaint.scss';

export const ComplaintForm = () => {
    return(
    <form className="complaint-container">
        <div className="complaint-form">
            <h4>Formulario de Denuncias</h4>
            <div className="form-inputs">
                <div className="data-denunciante">
                    <h5>Datos del Denunciante</h5>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombres" required /><span className="bar"></span>
                    <input type="text" name="apell" id="apell" placeholder="Apellidos" required /><span className="bar"></span>
                    <input type="number" name="numero" id="numero" placeholder="No. de Identificación" required /><span className="bar"></span>
                    <input type="email" name="email" id="email" placeholder="E-mail" required /><span className="bar"></span>
                    <input type="number" name="numero" id="numero" placeholder="Número telefónico" required /><span className="bar"></span>
                    <input type="text" name="dirección" id="dirección" placeholder="Dirección de residencia" required /><span className="bar"></span>
                    <input type="number" name="dirección" id="dirección" placeholder="Código postal" required /><span className="bar"></span>
                    <input type="text" name="dirección" id="dirección" placeholder="Estado" required /><span className="bar"></span>
                    <input type="text" name="dirección" id="dirección" placeholder="Ciudad" required /><span className="bar"></span>
                </div>
                <div className="data-denunciado">
                    <h5>Datos del Denunciado</h5>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre del denunciante" required /><span className="bar"></span>
                    <input type="text" name="apell" id="apell" placeholder="Apellidos del denunciante" required /><span className="bar"></span>
                    <input type="number" name="numero" id="numero" placeholder="No. de Identificación (opcional)" /><span className="bar"></span>
                    <input type="text" name="Estado" id="Estado" placeholder="Estado (opcional)" /><span className="bar"></span>
                    <input type="text" name="Ciudad" id="Ciudad" placeholder="Ciudad (opcional)" /><span className="bar"></span>
                    <textarea name="comentarios" rows="10" cols="40" placeholder="Describe el motivo de la denuncia" required /><span className="bar"></span>
                </div>
            </div>
            <button type="submit">Siguiente</button>
            <p>Estás aceptando nuestros términos y condiciones</p>
        </div>
    </form>
    )
};