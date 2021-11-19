import React, {useState} from 'react';

const Context = React.createContext()

const CartFunction = ({children}) => {
    const [cart,setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const onAdd = (producto, cantidad) =>{
        const itemExiste = cart.find(item => item.id === producto.id);

        if (!itemExiste) {
            setCart([...cart, {id:producto.id, nombre:producto.name, precio:producto.price, cantidad:cantidad, subtotal:(producto.price * cantidad)}])
            setTotal(total + (producto.price*cantidad))
        }
        else {
            const cartAux = cart.map((item)=> {
                if (item.id === producto.id){
                    item.cantidad+=cantidad
                    item.subtotal+=(producto.price*cantidad)
               }
            return item
            })
            setCart(cartAux)
            setTotal(total+(producto.price*cantidad))
        }
    }

    const delList = () => {
        setCart((cartAux) => cartAux.filter((item) => item === item.id))
        setTotal(0);
    }

    const delItem = (itemDeleted) => {
        setCart((cartAux) => cartAux.filter((item) => itemDeleted.id !== item.id))
        setTotal(total-itemDeleted.subtotal);
    }
    
    return <Context.Provider value = {{cart, total, onAdd, delList, delItem}}>
        {children}
    </Context.Provider>
}

export {CartFunction, Context}