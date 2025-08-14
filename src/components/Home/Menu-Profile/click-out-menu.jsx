import { useEffect } from "react"; // Hook para manejar efectos secundarios

// Hook personalizado para manejar clics fuera de un elemento
const ClickOutMenu = (ref, callback) => {
    useEffect(() => {
        // Función para verificar si el clic fue fuera del elemento
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(); // Ejecuta la función pasada como argumento
            }
        };

        // Escucha eventos de clic en cualquier parte del documento
        document.addEventListener("mousedown", handleClickOutside);

        // Limpia el evento al desmontar el componente
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]); // Dependencias: referencia y función
};

export default ClickOutMenu; // Exporta el hook para reutilizarlo
