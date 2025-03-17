import { useState, useEffect } from 'react';
import "./Carrito.css";

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    // Por ahora usaremos datos de ejemplo
    useEffect(() => {
        // Aquí posteriormente cargaremos el carrito desde localStorage o el backend
        const carritoEjemplo = [
            {
                id: 1,
                nombre: "Silla Moderna",
                precio: 299.99,
                cantidad: 2,
                imagen: "https://via.placeholder.com/100x100"
            },
            {
                id: 2,
                nombre: "Mesa de Centro",
                precio: 499.99,
                cantidad: 1,
                imagen: "https://via.placeholder.com/100x100"
            }
        ];
        setCarrito(carritoEjemplo);
        
        // Calcular total
        const totalCalculado = carritoEjemplo.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        setTotal(totalCalculado);
    }, []);

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
        // Recalcular total
        const nuevoTotal = carrito
            .filter(item => item.id !== id)
            .reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        setTotal(nuevoTotal);
    };

    const actualizarCantidad = (id, nuevaCantidad) => {
        if (nuevaCantidad < 1) return;
        
        setCarrito(carrito.map(item => 
            item.id === id ? { ...item, cantidad: nuevaCantidad } : item
        ));
        
        // Recalcular total
        const nuevoTotal = carrito
            .map(item => item.id === id ? { ...item, cantidad: nuevaCantidad } : item)
            .reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        setTotal(nuevoTotal);
    };

    if (carrito.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega algunos productos para verlos aquí</p>
            </div>
        );
    }

    return (
        <div className="carrito-container">
            <h2 className="carrito-titulo">Tu Carrito</h2>
            <div className="carrito-items">
                {carrito.map((item) => (
                    <div key={item.id} className="carrito-item">
                        <img src={item.imagen} alt={item.nombre} className="item-imagen" />
                        <div className="item-info">
                            <h3 className="item-nombre">{item.nombre}</h3>
                            <div className="item-precio">${item.precio}</div>
                            <div className="item-cantidad">
                                <button 
                                    onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                                    className="btn-cantidad"
                                >
                                    -
                                </button>
                                <span>{item.cantidad}</span>
                                <button 
                                    onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                                    className="btn-cantidad"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={() => eliminarDelCarrito(item.id)}
                            className="btn-eliminar"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
            <div className="carrito-resumen">
                <h3>Resumen</h3>
                <div className="resumen-total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button className="btn-comprar">
                    Proceder al pago
                </button>
            </div>
        </div>
    );
};

export default Carrito; 