import React, {useContext} from 'react';
import {Context} from '../../context/CartContext'

const Cart = ()=>{
    const {cart, total, delList, delItem} = useContext(Context)

    return(
        <>
        {cart.map((item) =>
        <div>
            <h2>nombre: {item.nombre}</h2>
            <h2>cantidad: {item.cantidad}</h2>
            <h2>subtotal: {item.subtotal}</h2>
            <button onClick={() => delItem(item)}>Eliminar Producto</button>
        </div>
        )}
        <p>Total carrito: {total}</p>
        <button onClick={delList}>Cancelar compra</button>
        </>
    )
}

export default Cart