import React from "react"; // Importa la librería React para crear componentes
import logo from '../../../assets/img/Logo_SENAVANZA.png' // Importa la imagen del logo
import './footer.css'; // Importa los estilos del footer

function Footer() {
    return (
        // Componente de pie de página principal
        <footer className="footer">
            <div className="linea-footer"></div> {/* Línea separadora superior */}
            <div className="footer-total">
                <div className="logo-sena">
                    {/* Imagen del logo con texto alternativo */}
                    <img src={logo} alt="Logo senavanza" />
                </div>
                <p>Copyright SENAVANZA - SENA - 2025</p>
            </div>
        </footer>
    );
}

export default Footer; // Exporta el componente para su uso en otras partes
