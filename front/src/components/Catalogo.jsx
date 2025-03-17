import { useState, useEffect } from 'react';
import "./Catalogo.css";

const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/v1/productos");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                
                if (!result || !result.data || !Array.isArray(result.data)) {
                    setError("Formato de datos incorrecto");
                    return;
                }

                setProductos(result.data);
                setLoading(false);
            } catch (err) {
                setError(`Error al cargar los productos: ${err.message}`);
                setLoading(false);
            }
        };

        obtenerProductos();
    }, []);

    if (loading) {
        return (
            <div className="catalogo-loading">
                <div className="loading-spinner"></div>
                <div>Cargando productos...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="catalogo-error">
                <div>{error}</div>
                <div>Por favor, verifica que el servidor esté corriendo en http://localhost:3000</div>
            </div>
        );
    }

    if (productos.length === 0) {
        return (
            <div className="catalogo-container">
                <h2 className="catalogo-titulo">Nuestro Catálogo</h2>
                <div className="catalogo-error">No hay productos disponibles</div>
            </div>
        );
    }

    return (
        <div className="catalogo-container">
            <h2 className="catalogo-titulo">Nuestro Catálogo</h2>
            <div className="productos-grid">
                {productos.map((producto) => (
                    <div key={producto._id} className="producto-card">
                        <div className="producto-imagen">
                            <img 
                                src={producto.imagen || "https://via.placeholder.com/300x200"} 
                                alt={producto.name}
                                className="imagen-producto"
                            />
                        </div>
                        <div className="producto-info">
                            <h3 className="producto-nombre">{producto.name}</h3>
                            <div className="producto-descripcion">{producto.description}</div>
                            <div className="producto-detalles">
                                <div className="producto-precio">${producto.price}</div>
                                <div className="producto-stock">
                                    Stock: {producto.stock}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo; 