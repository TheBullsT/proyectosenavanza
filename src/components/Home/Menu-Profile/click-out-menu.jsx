import { useEffect } from "react";

/**
 * Hook personalizado para detectar clics fuera de un elemento referenciado
 * 
 * @param {React.RefObject} ref - referencia al elemento que queremos monitorear
 * @param {Function} callback - función que se ejecuta cuando se detecta un clic fuera
 */
const ClickOutMenu = (ref, callback) => {
    useEffect(() => {
        // Función que se ejecuta cuando ocurre un clic en el documento
        const handleClickOutside = (event) => {
            // Verifica si el clic fue fuera del elemento referenciado
            if (ref.current && !ref.current.contains(event.target)) {
                callback(); // Ejecuta el callback si se clicó fuera
            }
        };

        // Añade el listener para clicks en el documento
        document.addEventListener("mousedown", handleClickOutside);

        // Limpia el listener cuando el componente se desmonta o cambia ref/callback
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]); // Reejecuta si cambia la referencia o el callback
};

export default ClickOutMenu;

